import { IFormConfig } from '@/components/custom-form';
import { ITableConfig } from '@/components/custom-table';

export interface IPageContentProps {
  formConfig?: IFormConfig;
  tableConfig?: ITableConfig;
  modelName: string;
  pageName: string;
}
