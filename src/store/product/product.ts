import { Module } from 'vuex';
import { IRootState } from '../types';
import { IProduct, GET_GOODS_LIST, LOAD_GOODS_LIST } from './types';
import goodsList from './data/goods.list';

const ProductModule: Module<IProduct, IRootState> = {
  namespaced: true,
  state: {
    goodsList: []
  },
  actions: {
    [GET_GOODS_LIST]({ commit }) {
      commit(LOAD_GOODS_LIST, goodsList);
    }
  },
  mutations: {
    [LOAD_GOODS_LIST](state, goodsList) {
      state.goodsList = goodsList;
    }
  },
  getters: {
    getDataList: (state) => {
      return (pageName: string) => state[`${pageName.toLowerCase()}List`];
    }
  }
};

export default ProductModule;
