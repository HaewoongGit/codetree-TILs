var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.split(' ').map(Number));

const firstLine = [];
const secondLine = [];
const thirdLine = [];

for(let i = 0; i < input.length; i++) {
    let sum = 0;
    let everage = 0;
    for(let j = 0; j < input[i].length; j++) {
        sum += input[i][j];
    }
    everage = sum / input[i].length;
    firstLine.push(everage);
}

for(let i = 0; i < input[0].length; i++) {
    let sum = 0;
    let everage = 0;
    for(let j = 0; j < input.length; j++) {
        sum += input[j][i];
    }
    everage = sum / input.length;
    secondLine.push(everage);
}

let sum = 0;
let everage = 0;

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
        sum += input[i][j];
    }
}

everage = sum / (input.length * input[0].length);
thirdLine.push(everage);

console.log(firstLine.map(el => el.toFixed(1)).join(' '));
console.log(secondLine.map(el => el.toFixed(1)).join(' '));
console.log(thirdLine.map(el => el.toFixed(1)).join(' '));