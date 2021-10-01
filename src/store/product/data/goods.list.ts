import { IGoods } from '../types';

const goodsList: IGoods[] = [
  {
    name: '清甜可口不粘牙的COOKIE☆',
    price: '187',
    current_price: '364',
    img: '/favicon.ico',
    status: 1,
    createdAt: '2021.10.01',
    updatedAt: '2021.10.01'
  }
];

for (let i = 0; i < 10; i++) goodsList.push(goodsList[0]);

export default goodsList;
