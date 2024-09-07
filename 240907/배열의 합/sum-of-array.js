const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
    let sumVal = 0;
    const answer = input[i].split(' ').map(Number);
    for(let j = 0; j < answer.length; j++) {
        sumVal += answer[j];
    }
    console.log(sumVal);
}