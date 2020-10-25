// You should implement your task here.
const _ = require('lodash');

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    return _.flatten(matrix.map((element, index) => (index % 2 !== 0) ? element.reverse() : element));
}

