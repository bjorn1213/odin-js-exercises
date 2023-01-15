const removeFromArray = function(array, ...filterValues) {
    return array.filter((value) => !filterValues.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
