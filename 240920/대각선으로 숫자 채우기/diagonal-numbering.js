const fs = require('fs');
var [n,m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = Array(n).fill().map(() => Array(m).fill(0));

let num = 1;

for(let startCol = 0; startCol < m; startCol++) {
    let curCol = startCol;
    let curRow = 0;

    while(curCol >= 0 && curRow < n) {
        answer[curRow][curCol] = num;
        num++;
        curCol--;
        curRow++;
    }
}

for(let startRow = 1; startRow < n; startRow++) {
    let curCol = m - 1;
    let curRow = startRow;

    while(curCol >= 0 && curRow < n) {
        answer[curRow][curCol] = num;
        num++;
        curCol--;
        curRow++;
    }
}

for(let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(' '));
}