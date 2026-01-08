// for (let i = 5; i>0; i--) {
//     console.log('coundowub' + i);
// };

// console.log('lift');

// for (let i = 9; i > 0; i --){
//     if (i === 3) {
//         break;
//     }
//     console.log("print: " + i);
// };

// let progress = 0;

// while (progress < 100) {
//     console.log("dowlanding: " + progress);
//     progress += 20;
// };

// let pass = "";
// const correctPassword = "1234";
// let attempts = 0;

// while (pass !== correctPassword) {
//     attempts++;
//     console.log("attempt" + attempts+ "guess");

//     if (attempts === 3){
//         pass = "1234";
//     }
    
// }

// console.log("accses: "+ attempts);

// let statusCode = 404;

// switch (statusCode){
//     case 200:
//         console.log("everything is ok");
//         break;
//     case 404:
//         console.log("page not found");
//         break;
//     case 500:
//         console.log("the server crashed");
//         break;
//     default:
//         console.log("stop");
// }

// let water = 100

// while (water > 0) {
//     console.log ("watering the plants:" + water);
//     water -= 20;
// }
// console.log ("water is empty");

// for (let i=1; i <= 10; i++ ) {
//     let result = i * 5;
//     console.log ('5 x' + i + '=' + result);
// };

// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//        console.log("they are even" + i);
//     } 
// };

// let balance = 0;

// for (let month = 1; month <= 6; month++) {
//     balance = balance + 100;
//     console.log("Saving machine " + month + ' = ' + balance);
// };

// for (let i= 1; i <= 10; i ++) {
//     console.log("serving water: " + i);
//     if (i === 4 ) {
//         console.log("out of water! going back ");
//         break;
//     }
// };


// for (let i = 1;  i <= 5; i++) {
//     if (i === 3) {
//         console.log("STudnet 3 is absent, skippking");
//         continue;
//     }
//     console.log("Studebnt" + i + "is present");
// };


const orders = [
    {id: 1, amount: 50, status: "shipped"},
    {id: 2, amount: 150, status: "pending"},
    {id: 3, amount: 10, status: "shipped"},
    {id: 4, amount: 200, status: "canceled"}
];

let totalValue = 0;

for (const order of orders ) {
    if (order.status === "canceled") {
        console.log("it is canceled");
        continue;
    }
    console.log("Order "+ order.id + " is "+ order.status + " and cost $" + order.amount);

    totalValue += order.amount;
};

console.log(totalValue)


