import { ITableProps } from '@/components/custom-table/types/index';
import { ITableConfig } from '@/components/custom-table';

const tableProps: ITableProps[] = [
  { label: '角色名', prop: 'rolename' },
  { label: '权限介绍', prop: 'powerinfo' },
  { label: '创建时间', prop: 'createdAt' },
  { label: '更新时间', prop: 'updatedAt' },
  { label: '操作', slotName: 'handle' }
];

export const tableConfig: ITableConfig = {
  title: '角色管理',
  tableProps,
  showIndexColumn: true,
  showSelectionColumn: true
};
