const fs = require('fs');
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

for(let i = 0; i < n; i++) {
    let str = '';
    for(let j = 0; j < m; j++) {
        if(j % 2 === 1) str += (j * n + n - 1 - i + ' ');
        else str += (j * n + i + ' ');
    }
    console.log(str);
}