import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestCatchInterceptor?: (error: any) => any;
  responseInterceptor?: (config: T) => T;
  responseCatchInterceptor?: (error: any) => any;
}

export interface LoginInfo {
  token: string;
  userId: string;
  role: string;
  account: string;
}

export default interface CustomConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: AxiosInterceptors<T>;
  isLoading?: boolean;
}
