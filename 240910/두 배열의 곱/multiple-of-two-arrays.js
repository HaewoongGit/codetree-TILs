var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(row => row.split(' ').map(Number));


for(let i = 0; i < 3; i++) {
    let outputString = '';
    for(let j = 0; j < 3; j++) {
        const mutiply = input[i][j] * input[i+4][j];
        outputString += (mutiply + ' ');
    }
    console.log(outputString);
}