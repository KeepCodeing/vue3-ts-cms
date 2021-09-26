import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  reqquestCatchInterceptor?: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseCatchInterceptor?: (error: any) => any;
}

export default interface CustomConfig extends AxiosRequestConfig {
  interceptors?: AxiosInterceptors;
}
