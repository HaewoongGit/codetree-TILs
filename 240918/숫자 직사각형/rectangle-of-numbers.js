const fs = require('fs');
const [n,m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let num = 1;

for(let i = 0; i < n; i++) {
    let str = '';
    let startNum = num;
    let endNum = num + m - 1;
    for(let j = startNum; j <= endNum; j++) {
        str += (j + ' ');
        num += 1;
    }

    console.log(str);
}