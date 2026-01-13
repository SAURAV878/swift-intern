// const fs = require('fs');

// console.log("1. Asking node to read a file");

// fs.readFile('ghost.txt', 'utf8', function(err, data){
//     if (err) {
//         console.log('2. error: i cant find the file');
//     } else {
//         console.log('2. sucess: here is your file');
//         console.log(data);
//     }
// });

// console.log('3. i am already finshed the code ');

// const fs = require('fs');

// console.log("Starting");

// fs.writeFile('log.txt', 'i am leraning backend', function(err, data) {
//     if (err) {
//         console.log("log it");
//     } else {
//         console.log("Sucess");
//         console.log(data);

//     }
// });

// const fs = require('fs');

// console.log("Searching");

// fs.readFile('log.txt', 'utf8',  function(err, data) {
//     if (err) {
//         console.log("not fund log.txt");
//     } else {
//         console.log("found here is log.txt")
//         console.log(data);
//     }
// });


const fs = require('fs');

console.log('wait');

fs.appendFile('log.txt', '\n: User just logged in', function(err, data) {
    if (err) {
        console.log("not ");
    } else {
        console.log("hey log.txt");
    }
});