const dec = require('./decimals');
// If prime number
module.exports = (x) => {
    // Eliminate 0 & 1
    if (x === 0 || x === 1) {
        return false;
    }
    for (let i = 2; i < 10; i++) {
        // Eliminate when numbers are the same (would return 1 with 0 decimals)
        if (i !== x) {
            // If number of decimals equals 0, the number is not prime
            if (dec(x/i) === 0) {
                return false;
            }
        }
    }
    // If the value never was divisible, the number is prime.
    return true;
}
