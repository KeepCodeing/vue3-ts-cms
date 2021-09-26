import AxiosRequest from './request';

export const inc = new AxiosRequest({
  baseURL: 'http://localhost:3000',
  timeout: 5 * 1000,
  interceptors: {
    // 请求成功拦截器：只要请求发出去了就算成功（用来设置token）
    requestInterceptor: (config) => {
      console.log('请求成功! req');
      // console.log(config);
      return config;
    },
    // 请求失败拦截器：请去没发出去算失败
    requestCatchInterceptor: (config) => {
      console.log('请求失败！ req');
      return config;
    },
    // 响应成功拦截器：拿到了响应体就算成功
    responseInterceptor: (config) => {
      console.log('请求成功! res');
      return config;
    },
    // 响应失败拦截器：没拿到响应体就算失败
    // 这里返回的config是一个字符串，表示错误，后面的单个请求会认为这个字符串
    // 就是响应体，也就是请求响应成功了....
    responseCatchInterceptor: (config) => {
      console.log('请求失败! res');
      return config;
    }
  }
});
