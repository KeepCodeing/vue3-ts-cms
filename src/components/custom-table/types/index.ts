export interface ITableProps {
  label: string;
  prop?: string;
  minWidth?: string;
  width?: string;
  slotName?: string;
}

export interface ITableConfig {
  showIndexColumn?: boolean;
  showSelectionColumn?: boolean;
  tableProps: ITableProps[];
  data?: any[];
  title?: string;
}
