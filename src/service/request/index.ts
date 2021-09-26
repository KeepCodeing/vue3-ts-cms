import type { AxiosInstance } from 'axios';
import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus';
// 不知道为什么没有导入CSS...
import 'element-plus/theme-chalk/el-loading.css';
import CustomConfig from './type';
import axios from 'axios';

const DEFAULT_LOADING = true;
export default class AxiosRequest {
  instance: AxiosInstance;
  lodingMask?: ILoadingInstance;
  isLoading?: boolean;

  constructor(config: CustomConfig) {
    this.instance = axios.create(config);
    // 不传入默认为true
    this.isLoading = config.isLoading ?? DEFAULT_LOADING;

    // 封装非通用拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestCatchInterceptor
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseCatchInterceptor
    );

    // 封装通用拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isLoading) {
          this.lodingMask = ElLoading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        }
        return config;
      },
      (error) => {
        // this.lodingMask?.close();
        this.isLoading = DEFAULT_LOADING;
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        // this.lodingMask?.close();
        this.isLoading = DEFAULT_LOADING;
        return config;
      },
      (error) => {
        // this.lodingMask?.close();
        this.isLoading = DEFAULT_LOADING;
        return error;
      }
    );
  }

  request<T>(config: CustomConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 某些请求不需要加载动画，因此需要修改config（为什么不在下面的config里修改？
      // 因为拦截器接受的是axios的类型，而不是我们自己定义的类型）
      if (config.isLoading === false) {
        this.isLoading = false;
      }
      // 针对某个请求添加特殊的拦截器
      // 请求成功拦截器（这里暂且存疑，因为下面的函数的作用似乎就是封装config...
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((error) => {
          // 请求失败拦截器
          // if (config.interceptors?.responseCatchInterceptor) {
          //   error = config.interceptors.responseCatchInterceptor(error);
          // }
          // if (config.interceptors?.requestCatchInterceptor) {
          //   config = config.interceptors.requestCatchInterceptor(config);
          // }
          reject(error);
        });
    });
  }

  get<T>(config: CustomConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T>(config: CustomConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T>(config: CustomConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T>(config: CustomConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}
