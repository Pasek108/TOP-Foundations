const palindromes = function (string) {
    const optimized = string.toLowerCase().replace(/[^a-z0-9]+/g, '')
    const reversed = optimized.split("").reverse().join("")

    return optimized === reversed
};

// Do not edit below this line
module.exports = palindromes;
