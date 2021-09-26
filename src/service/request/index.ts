import type { AxiosInstance } from 'axios';
import CustomConfig from './type';
import axios from 'axios';

export default class AxiosRequest {
  instance: AxiosInstance;

  constructor(config: CustomConfig) {
    this.instance = axios.create(config);

    // 封装非通用拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.reqquestCatchInterceptor
    );

    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseCatchInterceptor
    );

    // 封装通用拦截器
    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error
    );
    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error
    );
  }

  request(config: CustomConfig): Promise<any> {
    // 针对某个请求添加特殊的拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    // this.instance.request(config).then((res) => {
    //   if (config.interceptors?.responseInterceptor) {
    //     res = config.interceptors.responseInterceptor(res);
    //   }
    //   console.log(res);
    // });
    return this.instance.request(config);
  }
}
