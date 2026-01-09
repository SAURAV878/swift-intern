// const fecthUSer =  () => {
//     return new Promise((resolve, reject) => {
//         console.log("Searching ");

//         setTimeout(() => {
//             resolve({id:1, name:'saurav'});
//         }, 2000);
//     });
// };

// fecthUSer()
//     .then((user) => {
//         console.log("userfoung" + user.name);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// const checkWeather = () => {
//     return new Promise((resolve, reject) => {
//         console.log("checking weather");

//         setTimeout(() => {
//             reject("sunny");
            
//         }, 5000);
//     });
// };

// checkWeather()
//     .then((data) => {
//         console.log("weather check:" + data);
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// console.log("i am waiting");

// const showWeather = async () => {
//     console.log("look");

//     try {
//         const result = await checkWeather();
//         console.log(result);
//     } catch (error) {
//         console.log("sry"+error);

//     }
// };

// showWeather();


// function checkPassword (password) {
//     return new Promise (function(resolve, reject) {

//         setTimeout (function() {
//             if (password === "1234") {
//                 resolve("login"); 
//             } else {
//                 reject("wrong pass")
//             }
//         }, 2000);
//     });
// };

// async function loginProcess () {
//     try {
//         const pass = await checkPassword("999");
//         console.log("password is right" + pass);
//     } catch (error) {
//         console.log("check password" + error);
//     }
// };

// loginProcess();


function validateEmail (email) {
    if (email.includes ("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    };

};

function checkDatabase (email) {
    return new Promise (function (resolve, reject) {

        setTimeout (function () {
            if (email === "saurav@gmail.com") {
                reject ("User already exixts");
            } else {
                resolve ("email is avaible");
            }
        }, 3000);

    });
};


async function registerProcess(email) {
    let isValid = validateEmail(email);
    if ( !isValid ) {
        console.log("invalid format");
        return;
    };

    try {
        let dbResult = await checkDatabase(email);
        console.log(dbResult);

    } catch (err) {
        console.log(err);
    };
};

registerProcess("ghimiresauravgmailcom");
registerProcess("sauravgmailcom");

