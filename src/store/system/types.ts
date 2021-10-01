export interface ISystemModel {
  userList: any[];
  roleList: any[];
  menuList: any[];
  [key: string]: any;
}

export const GET_USER_LIST = 'getUserList';
export const LOAD_USER_LIST = 'loadUserList';

export const GET_ROLE_LIST = 'getRoleList';
export const LOAD_ROLE_LIST = 'loadRoleList';

export const GET_MENU_LIST = 'getMenuList';
export const LOAD_MENU_LIST = 'loadMenuList';
