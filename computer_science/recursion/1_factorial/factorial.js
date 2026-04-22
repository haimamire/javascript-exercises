const factorial = function (n) { 
  if (typeof n !== 'number' || n < 0 || Math.floor(n) !== n) return

  if (n <= 1) return 1;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
