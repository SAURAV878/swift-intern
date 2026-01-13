const fs = require('fs');

console.log("1. Asking node to read a file");

fs.readFile('ghost.txt', 'utf8', function(err, data){
    if (err) {
        console.log('2. error: i cant find the file');
    } else {
        console.log('2. sucess: here is your file');
        console.log(data);
    }
});

console.log('3. i am already finshed the code ');