const removeFromArray = function (...x) {
  return x[0].filter((el) => !x.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
