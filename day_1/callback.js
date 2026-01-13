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


// const fs = require('fs');

// console.log('wait');

// fs.appendFile('log.txt', '\n: User just logged in', function(err, data) {
//     if (err) {
//         console.log("not ");
//     } else {
//         console.log("hey log.txt");
//     }
// });

// const fs = require('fs');

// console.log('netsing fs under fs');

// fs.readFile('secret.txt', 'utf8', function(err, data) {
//     if (err) {
//         console.log('no file');
//         fs.writeFile('secret.txt', 'I created this because it was missing', function(err) {
//             if (err) {
//                 console.log("error file craeted")
//             } else {
//                 console.log('succesfull')
//             }
//         });
//     } else {
//         console.log(data);
//     }
// });

// const fs = require('fs').promises;

// console.log("Trying to do with promises");

// async function run() {
//     try {
//         const data = await fs.readFile('log.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);

//     }
// };

// run();

const fs = require('fs').promises;
console.log('doing it in modern way');

async function combinnig() {
    try {
        console.log('staring operations');
        const data = await fs.writeFile('activity.txt', 'log Start\n');

        const file = await fs.appendFile('activity.txt', 'user saurav logged in at 10:05 am');

        const read = await fs.readFile('activity.txt', 'utf8');
        console.log(read);
    } catch (err) {
        console.log("error found: " + err);
    }

};

combinnig();