import { Module } from 'vuex';
import { IRootState } from '../types';
import { ILoginInfo, GET_LOGIN_INFO } from './types';

const LoginModule: Module<ILoginInfo, IRootState> = {
  namespaced: true,
  state: {
    name: '',
    token: ''
  },
  actions: {
    [GET_LOGIN_INFO]({ commit }, payload) {
      // 1. 获取token
      // 2. 获取用户信息
      // 3. 获取路由表
      console.log(payload);
    }
  },
  mutations: {}
};

export default LoginModule;
