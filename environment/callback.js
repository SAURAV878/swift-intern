function sum (a,b) {
    return a + b;
};


function multiply (a,b) {
    return a * b;
};


function calculate(x,y, operation) {
    console.log(operation (x,y));
    
}

calculate(5,5, sum);
calculate(5,5, multiply);

// note: we can seng logic itself in Node.js

function fetchData (callback) {
    setTimeout (() => {
        callback('Data is recevied');
    }, 2000);
}

console.log("starting the request");

fetchData((message) => {
    console.log(message);
})

console.log('I am free to do other work while waiting');
