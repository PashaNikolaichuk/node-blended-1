import { PATH_DB } from '../constants/path.js';
import fs from 'node:fs/promises';

const getProductsCategory = async () => {
  try {
    // отримуємо наявні контакти з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const prodects = JSON.parse(data);

    // отримаємо всі категорії в масив
    const categories = prodects.map((product) => product.category);

    //
    const productsCategory = categories.filter(
      // бере кожен елемент масиву item і прирівнює його до index, якщо повторюється то fasle
      (item, index, arr) => arr.indexOf(item) === index,
    );

    //  const uniqueCategories = [...new Set(categories)]; працює так само видаляючи дублікати
    console.log(productsCategory);
  } catch (error) {
    console.error(error);
  }
};

getProductsCategory();
