const repeatString = function(str, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str;
    }
    return string;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
