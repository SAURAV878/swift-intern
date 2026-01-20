function outer () {
    const message = 'hello from the parent';
    inner();

    function inner () {
        console.log(message);
    }
}

outer();

// function createCounter () {
//     let count = 0;
//     return () => {
//         count += 1;
//         console.log(count);
//     };
// };

// const myCounter = createCounter();
// const myCount = createCounter();
// myCounter();
// myCounter();
// myCounter();
// myCount();

// function createInterestCal (rate) {
 
//     return (amount) => {
//         console.log('interest: ' + (amount * rate));
//     };

// };

// const nabilBank = createInterestCal(0.10); 
// const globalBank = createInterestCal(0.05); 


// nabilBank(1000); 
// globalBank(1000); 