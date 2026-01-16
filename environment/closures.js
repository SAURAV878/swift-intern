// function outer () {
//     const message = 'hello from the parent';
//     inner();

//     function inner () {
//         console.log(message);
//     }
// }

// outer();

function createCounter () {
    let count = 0;
    return () => {
        count += 1;
        console.log(count);
    };
};

const myCounter = createCounter();
const myCount = createCounter();
myCounter();
myCounter();
myCounter();
myCount();