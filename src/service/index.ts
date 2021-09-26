import AxiosRequest from './request';

export const inc = new AxiosRequest({
  baseURL: 'http://www.baidu.com',
  timeout: 5 * 1000,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功!');
      return config;
    }
  }
});
