const removeFromArray = function(arr, ...elem) {
    return arr.filter(x => !elem.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
