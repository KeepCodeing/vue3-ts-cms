import { Module } from 'vuex';
import { IRootState } from '../types';
import {
  ISystemModel,
  LOAD_USER_LIST,
  GET_USER_LIST,
  GET_ROLE_LIST,
  LOAD_ROLE_LIST
} from './types';
import { userList } from './data/user.list';
import { roleList } from './data/role.list';

const SystemModel: Module<ISystemModel, IRootState> = {
  namespaced: true,
  state: {
    userList: [],
    roleList: []
  },
  actions: {
    [GET_USER_LIST]({ commit }) {
      commit(LOAD_USER_LIST, userList);
    },
    [GET_ROLE_LIST]({ commit }) {
      commit(LOAD_ROLE_LIST, roleList);
    }
  },
  mutations: {
    [LOAD_USER_LIST](state, userList) {
      state.userList = userList;
    },
    [LOAD_ROLE_LIST](state, roleList) {
      state.roleList = roleList;
    }
  },
  getters: {
    getDataList: (state) => {
      return (pageName: string) => state[`${pageName.toLocaleLowerCase()}List`];
    }
  }
};

export default SystemModel;
