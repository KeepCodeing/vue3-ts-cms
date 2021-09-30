export interface ISystemModel {
  userList: any[];
  roleList: any[];
  [key: string]: any;
}

export const GET_USER_LIST = 'getUserList';
export const LOAD_USER_LIST = 'loadUserList';

export const GET_ROLE_LIST = 'getRoleList';
export const LOAD_ROLE_LIST = 'loadRoleList';
