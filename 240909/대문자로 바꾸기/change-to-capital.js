var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const twoDimensionArr = [];

for(let i = 0; i < input.length; i++) {
    const newArr = input[i].split(' ');
    twoDimensionArr.push(newArr);
}

for(let i = 0; i < twoDimensionArr.length; i++) {
    for(let j = 0; j < twoDimensionArr[i].length; j++) {
        twoDimensionArr[i][j] = twoDimensionArr[i][j].toUpperCase();
    }
}

const formattedOutput = twoDimensionArr.map(row => row.join(' ')).join('\n');
console.log(formattedOutput);