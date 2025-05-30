const sumAll = function(minNum, maxNum) {
    if (!Number.isInteger(minNum) || !Number.isInteger(maxNum)) return 'ERROR';
    if (minNum < 0 || maxNum < 0) return 'ERROR';
    // if (isNaN(minNum) || isNaN(maxNum)) return 'ERROR';
    
    if (minNum > maxNum) {
        let temp = minNum;
        minNum = maxNum;
        maxNum = temp;
    }
    let numbers = [];
    for (minNum; minNum <= maxNum; minNum++) {
        numbers.push(minNum);
    }
    const sum = numbers.reduce((total, item) => total + item, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
