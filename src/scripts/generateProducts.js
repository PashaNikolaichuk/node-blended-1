import { PATH_DB } from '../constants/path.js';
import { createFakeProducts } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';

export const generateProducts = async (number) => {
  try {
    // читаємо файл, де зберігаються продукти ( products.json)
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // перетворюємо JSON-рядок у масив обєктів
    const readProducts = JSON.parse(data);

    // створюємо нові amount продуктів за допомогою фейкової генерації
    const newProducts = Array.from({ length: number }, () =>
      createFakeProducts(),
    );

    // обєднуємо старі продукти з новими
    const writeProducts = [...readProducts, ...newProducts];

    // записуємо все назад у файл, форматуючи JSON з відступами 2 пробіли
    await fs.writeFile(PATH_DB, JSON.stringify(writeProducts, null, 2));
  } catch (error) {
    console.error('Помилкова генерація продуктів', error);
  }
};

generateProducts(5);
