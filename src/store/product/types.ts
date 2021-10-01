export interface IGoods {
  name: string;
  price: string;
  current_price: string;
  img: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  goodsList: IGoods[];
  [key: string]: any;
}

export const GET_GOODS_LIST = 'getGoodsList';
export const LOAD_GOODS_LIST = 'loadGoodsList';
