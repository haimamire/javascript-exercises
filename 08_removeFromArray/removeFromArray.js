const removeFromArray = function(arr, ...removed) {
    let newArray = arr;
    for (const arg of removed) {
        newArray = newArray.filter(item => item !== arg);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
