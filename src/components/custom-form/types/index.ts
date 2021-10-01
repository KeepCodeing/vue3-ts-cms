type IFormType = 'input' | 'datepicker' | 'select';

export interface IFormConfig {
  itemStyle?: any;
  colLayout?: any;
  labelWidth?: string;

  formProps: IFormProp[];
}

export interface IFormProp {
  label: string;
  placeholder?: string;
  rules?: any[];
  filed: string;

  type?: IFormType;
  options?: any[];
  others?: any;
}
