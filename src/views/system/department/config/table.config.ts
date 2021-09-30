import { ITableProps } from '@/components/custom-table/types/index';
import { ITableConfig } from '@/components/custom-table';

const tableProps: ITableProps[] = [
  { label: '用户名', prop: 'nickname' },
  { label: '真实姓名', prop: 'realname' },
  { label: '手机号码', prop: 'phone' },
  { label: '状态', prop: 'status', slotName: 'status' },
  { label: '创建时间', prop: 'createdAt' },
  { label: '更新时间', prop: 'updatedAt' },
  { label: '操作', slotName: 'handle' }
];

const data: any[] = [
  {
    nickname: 'hwz',
    realname: 'hwz',
    phone: '1145141919',
    status: 1,
    createdAt: '2001.07.28',
    updatedAt: '2021.09.30'
  },
  {
    nickname: 'hwz',
    realname: 'hwz',
    phone: '1145141919',
    status: 1,
    createdAt: '2001.07.28',
    updatedAt: '2021.09.30'
  },
  {
    nickname: 'hwz',
    realname: 'hwz',
    phone: '1145141919',
    status: 0,
    createdAt: '2001.07.28',
    updatedAt: '2021.09.30'
  },
  {
    nickname: 'hwz',
    realname: 'hwz',
    phone: '1145141919',
    status: 0,
    createdAt: '2001.07.28',
    updatedAt: '2021.09.30'
  },
  {
    nickname: 'hwz',
    realname: 'hwz',
    phone: '1145141919',
    status: 1,
    createdAt: '2001.07.28',
    updatedAt: '2021.09.30'
  }
];

export const tableConfig: ITableConfig = {
  data,
  title: '部门管理',
  tableProps,
  showIndexColumn: true,
  showSelectionColumn: true
};
