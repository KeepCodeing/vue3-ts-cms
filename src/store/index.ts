import { createStore } from 'vuex';
import { IRootState } from './types';
import LoginModule from './login/login';
import SystemModel from './system/system';
import ProductModule from './product/product';

export default createStore<IRootState>({
  state: {
    name: '',
    age: 0
  },
  mutations: {},
  actions: {},
  modules: {
    login: LoginModule,
    system: SystemModel,
    product: ProductModule
  }
});
