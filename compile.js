
const fs = require('fs');

let text = fs.readFileSync(
    './data/digits.txt',
    'utf-8'
);

console.log(text.length);
let str = '';
let length = (text.length/2);
for (let i = 0; i < length; i ++) {
    str += text[i];
    console.log(i)
}
fs.writeFileSync('./data/newDigits.txt',str,'utf-8');
