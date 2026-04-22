const contains = function (obj, value) {
  let found = false;
  for (let key in obj) {
    if (obj[key] === value) return true;

    else if (typeof obj[key] === "object") {
      found = contains(obj[key], value);
      if (found) return found;
    }

  }
  return found;
};

// Do not edit below this line
module.exports = contains;
