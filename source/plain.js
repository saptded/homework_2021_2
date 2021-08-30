'use strict';

const plain = array => {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input');
    }

    return array.flat(Infinity);
}
