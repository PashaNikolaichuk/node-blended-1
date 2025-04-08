import { PATH_DB } from '../constants/path.js';
import fs from 'node:fs/promises';

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const readProducts = JSON.parse(data);

    const totalPrice = readProducts.reduce(
      (acc, readProduct) => acc + Number(readProduct.price),
      0,
    );

    console.log(totalPrice.toFixed(2));
  } catch (error) {
    console.error(error);
  }
};

getTotalPrice();
