'use strict';

const compare = (elem1, elem2) =>
  elem1 === elem2 ? 0 : elem1 > elem2 ? 1 : -1;

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

  return objects.sort((object1, object2) => params.reduce((result, prop) =>
    result || compare(object1[prop], object2[prop]),0));
};