export interface ITableProps {
  label: string;
  prop?: string;
  minWidth?: string;
  width?: string;
  slotName?: string;
}

export interface ITableChildren {
  rowKey: string;
  treeProp: {
    children: string;
  };
}

export interface ITableConfig {
  showIndexColumn?: boolean;
  showSelectionColumn?: boolean;
  showPagination?: boolean;
  tableProps: ITableProps[];
  data?: any[];
  title?: string;
  childrenProp?: ITableChildren;
}
