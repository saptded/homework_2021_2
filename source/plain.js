'use strict';

/**
 * Функция формирует массив, состоящий из элементов из всех вложенных подмассивов
 *
 * @param {array} array - исходный массив элементов
 * @returns {array} - массив элементов "поднятых" из всех подмассивов
 */

const plain = array => {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input');
    }

    return array.flat(Infinity);
}
