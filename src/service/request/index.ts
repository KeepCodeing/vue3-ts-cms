import type { AxiosInstance } from 'axios';
import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus';
// 不知道为什么没有导入CSS...
import 'element-plus/theme-chalk/el-loading.css';
import CustomConfig from './type';
import axios from 'axios';
export default class AxiosRequest {
  instance: AxiosInstance;
  lodingMask?: ILoadingInstance;

  constructor(config: CustomConfig) {
    this.instance = axios.create(config);

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
        this.lodingMask = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        return config;
      },
      (error) => {
        this.lodingMask?.close();
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        this.lodingMask?.close();
        return config;
      },
      (error) => {
        this.lodingMask?.close();
        return error;
      }
    );
  }

  request<T>(config: CustomConfig): Promise<T> {
    return new Promise((resolve, reject) => {
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

  get<T>(config: CustomConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T>(config: CustomConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T>(config: CustomConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T>(config: CustomConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' });
  }
}
