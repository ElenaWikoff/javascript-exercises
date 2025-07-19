const _fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];

const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) {
        return "OOPS";
    }
    if (n < _fib.length) {
        return _fib[n];
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
