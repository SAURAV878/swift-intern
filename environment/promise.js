const checkEntry = ((age) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (age >= 18) {
                resolve('welcome to the club');
            } else {
                reject('too young! Go home.');
            }


        }, 2000);
    });
});

// checkEntry(20)
//     .then((message) => {
//         console.log(message.user);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const handleEntry = async () => {
    try {
       const message = await checkEntry(29);
       console.log(message);

    } catch (err) {
        console.log('it error: ' + err);
    }
}

handleEntry();

async function test () {
    return 'hello';
    
}

console.log(test());
    

