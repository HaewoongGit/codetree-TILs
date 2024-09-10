var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ')).map(row => row.map(Number));

let sum = 0;

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j <= i; j++) {
        sum += input[i][j];
    }
}

console.log(sum);