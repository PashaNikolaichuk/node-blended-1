import { PATH_DB } from '../constants/path.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);

    // eslint-disable-next-line no-unused-vars
    const modifyProducts = products.map(({ description, ...rest }) => rest);

    // записуємо все назад у файл, форматуючи JSON з відступами 2 пробіли
    await fs.writeFile(PATH_DB, JSON.stringify(modifyProducts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

modifyProducts();
