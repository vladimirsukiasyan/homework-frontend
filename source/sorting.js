'use strict';

/**
 * Сортирует массив объектов по заданным полям. Сортировка-устойчивая
 * @param objects - массив сортируемых объектов
 * @param params - поля сортировки
 * @returns {object}
 */
const sorting = (objects, params) => {
  if (![objects, params].every(Array.isArray)) {
    return objects;
  }
  objects.sort((object1, object2) => {
    for (let param of params) {
      if ([object1, object2].find(obj =>
        typeof obj[param] === undefined
      )) {
        return 0;
      }
      if (object1[param] > object2[param]) {
        return 1;
      } else if (object1[param] < object2[param]) {
        return -1;
      }
    }
    return 0;
  });
  return objects;
};