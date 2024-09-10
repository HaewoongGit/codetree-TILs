const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(row => row.split(' ').map(Number));

// const answerArr = [];

// for(let i = 1; i < input[0][1] + 1; i++) {
//     const newArr = [];
//     for(let j = 0; j < input[0][0]; j++) {
//         input[i][j] === input[input[0][0]+i][j] ? newArr.push(0) : newArr.push(1);
//     }
//     answerArr.push(newArr);
// }

// console.log(answerArr.map(row => row.join(' ')).join('\n'));




const [n, m] = input[0];
const grid1 = input.slice(1, n + 1);
const grid2 = input.slice(n + 1);

const result = [];

for(let i = 0; i < n; i++) {
    const row = [];
    for(let j = 0; j < m; j++) {
        row.push(grid1[i][j] === grid2[i][j] ? 0 : 1);
    }
    result.push(row);
}

console.log(result.map(row => row.join(' ')).join('\n'));