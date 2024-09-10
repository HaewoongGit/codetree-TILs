const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(row => row.split(' ').map(Number));

const answerArr = [];

for(let i = 1; i < input[0][1] + 1; i++) {
    const newArr = [];
    for(let j = 0; j < input[0][0]; j++) {
        input[i][j] === input[input[0][0]+i][j] ? newArr.push(0) : newArr.push(1);
    }
    answerArr.push(newArr);
}

console.log(answerArr.map(row => row.join(' ')).join('\n'));