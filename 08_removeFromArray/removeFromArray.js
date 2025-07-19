const removeFromArray = function(arr, ...args) {
    return arr.filter((elem) => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
