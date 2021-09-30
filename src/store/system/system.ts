import { Module } from 'vuex';
import { IRootState } from '../types';
import { ISystemModel, LOAD_USER_LIST, GET_USER_LIST } from './types';
import { userList } from './data/user.list';

const SystemModel: Module<ISystemModel, IRootState> = {
  namespaced: true,
  state: {
    userList: []
  },
  actions: {
    [GET_USER_LIST]({ commit }) {
      commit(LOAD_USER_LIST, userList);
    }
  },
  mutations: {
    [LOAD_USER_LIST](state, userList) {
      state.userList = userList;
    }
  },
  getters: {
    getDataList: (state) => {
      return (pageName: string) => state[`${pageName.toLocaleLowerCase()}List`];
    }
  }
};

export default SystemModel;
