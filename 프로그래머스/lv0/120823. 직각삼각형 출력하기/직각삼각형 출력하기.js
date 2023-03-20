const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n=(Number(input[0]));
    
    for(let i=1;i<=n;i++){
        let show =[];
        for(let j=1;j<=i;j++){
            show.push("*");
        }
      console.log(show.join(""));
    }
    
});

