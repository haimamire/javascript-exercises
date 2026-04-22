const totalIntegers = function(arrayOrObject) {
  if (typeof arrayOrObject !== "object" && arrayOrObject !== null) return;

  const array = Object.values(arrayOrObject);

  let sum = 0;
  array.forEach(element => {
    if (typeof element === "object" && element !== null) sum += totalIntegers(element);

    sum += Number.isInteger(element) ? 1 : 0;
  });
  return sum;
};
  
// Do not edit below this line
module.exports = totalIntegers;
