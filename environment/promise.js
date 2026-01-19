const checkEntry = ((age) =>{
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (age >= 18) {
                resolve({status : 200, msg: 'welcome', user:'saurav'});
            } else {
                reject('too young! Go home.');
            }


        }, 2000);
    });
});

checkEntry(20)
    .then((message) => {
        console.log(message.user);
    })
    .catch((error) => {
        console.log(error);
    });

    

