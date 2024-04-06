const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    if (n == 0) return 0

    let arr = [0, 1]

    for (let i = 1; i < n; i++) {
        arr[1] = arr[1] + arr[0]
        arr[0] = arr[1] - arr[0] 
    }

    return arr[1]
};

// Do not edit below this line
module.exports = fibonacci;
