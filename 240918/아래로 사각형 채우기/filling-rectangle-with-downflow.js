const fs = require('fs');
const n = Number(fs.readFileSync("/dev/stdin").toString());


for(let i = 1; i <= n; i++) {
    let str = '';
    for(let j = 0; j < n; j++) {
        str += ((i + n * j) + ' ');
    }
    console.log(str);
}