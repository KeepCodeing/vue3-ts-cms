import { IPageContentProps } from '@/components/page-content/types';
import { tableConfig as tc } from './table.config';

export const pageContentConfig: IPageContentProps = {
  tableConfig: { ...tc },
  modelName: 'system',
  pageName: 'Menu'
};
