const pascal = function(rows, array = [0, 1, 0]) {
  if (rows === array.length - 2) {
    array.pop();
    array.shift();
    return array;
  } else {
    const mapped = array.map((element, index) => 
      array[index + 1] === undefined ? 0 : element + array[index + 1]
    );
  
    mapped.unshift(0);
    return pascal(rows, mapped);
  }
};
  
// Do not edit below this line
module.exports = pascal;
