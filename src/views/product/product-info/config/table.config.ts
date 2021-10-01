import { ITableProps } from '@/components/custom-table/types/index';
import { ITableConfig } from '@/components/custom-table';

const tableProps: ITableProps[] = [
  { label: '商品名称', prop: 'name' },
  { label: '原价格', prop: 'price' },
  { label: '现价格', prop: 'current_price' },
  { label: '商品图片', prop: 'img', slotName: 'img' },
  { label: '状态', prop: 'status', slotName: 'status' },
  { label: '创建时间', prop: 'createdAt' },
  { label: '更新时间', prop: 'updatedAt' },
  { label: '操作', slotName: 'handle' }
];

export const tableConfig: ITableConfig = {
  title: '商品信息',
  tableProps,
  showIndexColumn: true,
  showSelectionColumn: true
};
