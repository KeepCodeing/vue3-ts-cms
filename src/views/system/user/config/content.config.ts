import { IPageContentProps } from '@/components/page-content/types';
import { formConfig } from './search.config';
import { tableConfig as tc } from './table.config';

export const pageContentConfig: IPageContentProps = {
  formConfig,
  tableConfig: { ...tc },
  modelName: 'system',
  pageName: 'User'
};
