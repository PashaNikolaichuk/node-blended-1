import { PATH_DB } from '../constants/path.js';
import fs from 'node:fs/promises';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const readProducts = JSON.parse(data);

    const findPrice = readProducts.filter(
      (product) => product.price < minPrice,
    );

    console.log(`Продукти за ціною меньше${minPrice}`, findPrice);
  } catch (error) {
    console.error('Помилкове зчитування продуктів ', error);
  }
};

getProductsByMinPrice(300);
