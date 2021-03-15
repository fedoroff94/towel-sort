// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultArr = [];
    if (!matrix || matrix.length === 0) {
    return []
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i === 0 || i % 2 === 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    resultArr.push(matrix[i][j])
                }
            } else {
                matrix[i].reverse();
                for (let j = 0; j < matrix[i].length; j++) {
                    resultArr.push(matrix[i][j])
                }
            }
        }
        return resultArr
    }
};

