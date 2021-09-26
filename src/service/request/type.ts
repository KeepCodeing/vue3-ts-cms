import type { AxiosRequestConfig } from 'axios';

interface AxiosInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestCatchInterceptor?: (error: any) => any;
  responseInterceptor?: (config: any) => any;
  responseCatchInterceptor?: (error: any) => any;
}

export interface LoginInfo {
  token: string;
  userId: string;
  role: string;
  account: string;
}

export default interface CustomConfig extends AxiosRequestConfig {
  interceptors?: AxiosInterceptors;
}
