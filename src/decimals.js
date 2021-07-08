// Find number of decimals
module.exports = (x) => {
    // Get string after '.'
    let str = JSON.stringify(x).split('.')[1];
    if (str !== undefined) {
        // if string exists, return its length
        return str.length;
    } else {
        // if not, return 0
        return 0;
    }
}
