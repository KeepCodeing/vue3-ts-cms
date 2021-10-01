import { ITableProps } from '@/components/custom-table/types/index';
import { ITableConfig } from '@/components/custom-table';

const tableProps: ITableProps[] = [
  { label: 'id', prop: 'id' },
  { label: '菜单名称', prop: 'menuname' },
  { label: '类型', prop: 'type' },
  { label: '菜单url', prop: 'url' },
  { label: '菜单icon', prop: 'icon' },
  { label: '按钮权限', prop: 'button' },
  { label: '创建时间', prop: 'createdAt' },
  { label: '更新时间', prop: 'updatedAt' },
  { label: '操作', slotName: 'handle' }
];

export const tableConfig: ITableConfig = {
  title: '菜单管理',
  tableProps,
  showIndexColumn: false,
  showSelectionColumn: false,
  showPagination: false,
  childrenProp: {
    rowKey: 'id',
    treeProp: { children: 'children' }
  }
};
