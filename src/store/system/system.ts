import { menuList } from './data/menu.list';
import { Module } from 'vuex';
import { IRootState } from '../types';
import {
  ISystemModel,
  LOAD_USER_LIST,
  GET_USER_LIST,
  GET_ROLE_LIST,
  LOAD_ROLE_LIST,
  GET_MENU_LIST,
  LOAD_MENU_LIST
} from './types';
import { userList } from './data/user.list';
import { roleList } from './data/role.list';

const SystemModel: Module<ISystemModel, IRootState> = {
  namespaced: true,
  state: {
    userList: [],
    roleList: [],
    menuList: []
  },
  actions: {
    [GET_USER_LIST]({ commit }) {
      commit(LOAD_USER_LIST, userList);
    },
    [GET_ROLE_LIST]({ commit }) {
      commit(LOAD_ROLE_LIST, roleList);
    },
    [GET_MENU_LIST]({ commit }) {
      commit(LOAD_MENU_LIST, menuList);
    }
  },
  mutations: {
    [LOAD_USER_LIST](state, userList) {
      state.userList = userList;
    },
    [LOAD_ROLE_LIST](state, roleList) {
      state.roleList = roleList;
    },
    [LOAD_MENU_LIST](state, menuList) {
      state.menuList = menuList;
    }
  },
  getters: {
    getDataList: (state) => {
      return (pageName: string) => state[`${pageName.toLocaleLowerCase()}List`];
    }
  }
};

export default SystemModel;
