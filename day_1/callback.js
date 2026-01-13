// // const fs = require('fs');

// // const { futimesSync } = require('fs');

// // console.log("1. Asking node to read a file");

// // fs.readFile('ghost.txt', 'utf8', function(err, data){
// //     if (err) {
// //         console.log('2. error: i cant find the file');
// //     } else {
// //         console.log('2. sucess: here is your file');
// //         console.log(data);
// //     }
// // });

// // console.log('3. i am already finshed the code ');

// // const fs = require('fs');

// // console.log("Starting");

// // fs.writeFile('log.txt', 'i am leraning backend', function(err, data) {
// //     if (err) {
// //         console.log("log it");
// //     } else {
// //         console.log("Sucess");
// //         console.log(data);

// //     }
// // });

// // const fs = require('fs');

// // console.log("Searching");

// // fs.readFile('log.txt', 'utf8',  function(err, data) {
// //     if (err) {
// //         console.log("not fund log.txt");
// //     } else {
// //         console.log("found here is log.txt")
// //         console.log(data);
// //     }
// // });


// // const fs = require('fs');

// // console.log('wait');

// // fs.appendFile('log.txt', '\n: User just logged in', function(err, data) {
// //     if (err) {
// //         console.log("not ");
// //     } else {
// //         console.log("hey log.txt");
// //     }
// // });

// // const fs = require('fs');

// // console.log('netsing fs under fs');

// // fs.readFile('secret.txt', 'utf8', function(err, data) {
// //     if (err) {
// //         console.log('no file');
// //         fs.writeFile('secret.txt', 'I created this because it was missing', function(err) {
// //             if (err) {
// //                 console.log("error file craeted")
// //             } else {
// //                 console.log('succesfull')
// //             }
// //         });
// //     } else {
// //         console.log(data);
// //     }
// // });

// // const fs = require('fs').promises;

// // console.log("Trying to do with promises");

// // async function run() {
// //     try {
// //         const data = await fs.readFile('log.txt', 'utf8');
// //         console.log(data);
// //     } catch (err) {
// //         console.log(err);

// //     }
// // };

// // run();

// // const fs = require('fs').promises;
// // console.log('doing it in modern way');

// // async function combinnig() {
// //     try {
// //         console.log('staring operations');
// //         const data = await fs.writeFile('activity.txt', 'log Start\n');

// //         const file = await fs.appendFile('activity.txt', 'user saurav logged in at 10:05 am');

// //         const read = await fs.readFile('activity.txt', 'utf8');
// //         console.log(read);
// //     } catch (err) {
// //         console.log("error found: " + err);
// //     }

// // };

// // combinnig();

// // const fs = require('fs').promises;
// // function wait(ms) {
// //     return new Promise (function(resolve, reject) {

// //         setTimeout (function() {
// //             resolve();
// //         }, ms);
// //     })
// // };

// // async function time () {
// //     try {
// //         console.log("Checking file");

// //         await wait(3000);

// //         const data = await fs.readFile('activity.txt', 'utf8');
// //         console.log(data);

        
// //     } catch (err) {
// //         console.log(err);
// //     }
// // };

// // time();


// const students = [
//     {name: 'Saurav', score: '85'},
//     {name:'Ram',  score:'35'},
//     {name:'Sita',  score:'90'},
//     {name:'Gopal',  score:'25'},
// ];

// const fs = require('fs').promises;
// function wait(ms) {
//     return new Promise (function(reslove, reject) {
//         setTimeout (function(){
//             reslove("server calacution");
//         }, ms);
//     });
// }

// async function passed() {
//     try{
//         for (const student of students){
//             if ( student.score >= 40) {
//                 console.log('passed: ' + student.name);
//             };
//         }

//         await wait(4000);

//         const winners = students.filter(function (student) {
//             return student.score >= 40;
//         });

//         const names = winners.map(function (student) {
//             return student.name;
//         })


//         const reportText = names.join(', ');
//         await fs.writeFile('passed_students.txt', 'Passed Students\n: ' + reportText);


//         const read = await fs.readFile('passed_students.txt', 'utf8');
//         console.log(read);

//     } catch (err) {
//         console.log(err);
//     }
// }

// passed();

const rawOrders = [
    {id:1, item: 'Smartphone', price: 800, delivered: true},
    {id:2, item: 'Laptop', price: 1500, delivered: false},
    {id:3, item: 'Keyboard', price: 50, delivered: true},
    {id:4, item: 'Monitor', price: 400, delivered: true},
    {id:5, item: 'Mouse', price: 20, delivered: false},
];

const fetchOrders = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(rawOrders);
        }, 2000);
    });
}

const processDashboard = async () => {
    try {
        const order = await fetchOrders ();

        const deliver = order.filter(order => order.delivered === true);

        const withTax = deliver.map(order => (order.price * 1.10).toFixed((0)));
        console.log(withTax);

        const allaboveTen = withTax.every(price => price > 10);
        console.log('Above ten: ', allaboveTen);

        const luxuryItem = withTax.some(price => price > 1000);
        console.log('luxury items listed: ' , luxuryItem);

        const totalRevenue = withTax.reduce((total, price) => {
            return total + Number(price);
        }, 0);
        console.log("Total Revenue is : " + totalRevenue);        

    } catch (err) {
        console.log(err);
    }

};


processDashboard();



