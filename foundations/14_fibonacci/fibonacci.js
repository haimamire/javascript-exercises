const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;

    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr.push(
            arr[i - 2] + arr[i - 1]
        );
    }
    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
