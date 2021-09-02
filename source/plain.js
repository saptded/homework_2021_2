'use strict';

/**
 * Функция формирует массив, состоящий из элементов из всех вложенных подмассивов
 *
 * @param {*[]} array - исходный массив элементов
 * @returns {*[]} - массив элементов "поднятых" из всех подмассивов
 */

const plain = (array) => {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input');
    }

    const resultArray = [];

    while (array.length) {
        const currentElement = array.pop();

        if (currentElement === undefined) {
            continue;
        }

        Array.isArray(currentElement) ? array.push.apply(array, currentElement) : resultArray.push(currentElement);
    }

    return resultArray.reverse();
}
