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

export const tableConfig: ITableConfig = {
  title: '用户管理',
  tableProps,
  showIndexColumn: true,
  showSelectionColumn: true
};
