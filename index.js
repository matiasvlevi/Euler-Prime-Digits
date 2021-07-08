// Import euler's constant
const fs = require('fs');
const e = fs.readFileSync('./data/digits.txt', 'utf-8');
// Import find prime function
const prime = require('./src/prime');
// Parse length of consecutives argument or default to 10
let length_consecutives = process.argv[2] || 10;

let consecutives = [];
function find_consecutive_primes_in(value, nb) {
    for (let i = 2; i < value.length; i++) {
        let digit = value[i];
        let parsed_digit = JSON.parse(digit);
        // If prime, add to consecutives array
        if (prime(parsed_digit)) {
            consecutives.push(digit);
        } else {
            if (consecutives.length != nb) {
                //Clear array if found a non-prime & the length is not the desired one
                consecutives = [];
            }
        }
        // If consecutive list equals or exceeds said number,
        // stop the search and output consecutives.
        if (consecutives.length == nb) {
            let str='';
            for (let s = 0; s < consecutives.length; s++) {
                str += consecutives[s];
            }
            console.log('First ' + nb + ' consecutive prime numbers in e:  ' + str);
            console.log('Found at ' + (i - nb - 1) + 'th decimal place');
            return str;
        }

    }
    return undefined;
}
find_consecutive_primes_in(e, length_consecutives);
