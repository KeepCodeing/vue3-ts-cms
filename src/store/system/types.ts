export interface ISystemModel {
  userList: any[];
  [key: string]: any;
}

export const GET_USER_LIST = 'loadUserList';
export const LOAD_USER_LIST = 'getUserList';
