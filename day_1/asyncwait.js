const fecthUSer =  () => {
    return new Promise((resolve, reject) => {
        console.log("Searching ");

        setTimeout(() => {
            resolve({id:1, name:'saurav'});
        }, 2000);
    });
};

fecthUSer()
    .then((user) => {
        console.log("userfoung" + user.name);
    })
    .catch((err) => {
        console.log(err);
    });


const checkWeather = () => {
    return new Promise((resolve, reject) => {
        console.log("checking weather");

        setTimeout(() => {
            reject("sunny");
            
        }, 5000);
    });
};

checkWeather()
    .then((data) => {
        console.log("weather check:" + data);
    })
    .catch((error) => {
        console.log(error)
    });

console.log("i am waiting");

const showWeather = async () => {
    console.log("look");

    try {
        const result = await checkWeather();
        console.log(result);
    } catch (error) {
        console.log("sry"+error);

    }
};

showWeather();


function checkPassword (password) {
    return new Promise (function(resolve, reject) {

        setTimeout (function() {
            if (password === "1234") {
                resolve("login"); 
            } else {
                reject("wrong pass")
            }
        }, 2000);
    });
};

async function loginProcess () {
    try {
        const pass = await checkPassword("999");
        console.log("password is right" + pass);
    } catch (error) {
        console.log("check password" + error);
    }
};

loginProcess();


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

function genenrateReport () {
    let report = [];

    for (i=1; i<=20; i++ ){
        if ( i % 3 ===0 && i % 5 === 0) {
            report.push("FizzBuzz");
        } else if (i % 3 === 0) {
            report.push("Fizz");
        } else if ( i % 5 === 0) {
            report.push("BUzz");
        } else {
            report.push(i);
        }
    };
    return report;
};

console.log(genenrateReport());

const items = [
    {name: "apple", price: 10, category: "fruits"},
    {name: "BATTERY", price: -5, category: "electronics"},
    {name: "orange", price: 15, category: "fruits"},
    {name: "tablet", price: 200, category: "electronics"},
];

function cleanInventory (items) {
    const list = items.filter(function(item) {
        return item.price >= 0;
    });

    const clist = list.map(function(item) {
        return {
            name: item.name.trim().toLowerCase(),
            price: item.price,
            category: item.category
        };
    });
    return clist;
};

console.log(cleanInventory(items));

function verifyTicket(ticketId) {
    return new Promise (function(resolve, reject) {

        setTimeout (function( ) {
            if (ticketId.startsWith("ABC")) {
                return resolve("ticekt verified! Enjoy the movies.")
            } else {
                return reject("Invalid Ticket! Fraud Detected.")
            }
        }, 2000);

    });
};

async function handleUserEntry(ticektid) {
    try {
        let id = await verifyTicket(ticektid);
        console.log(id);
    } catch (err){
        console.log(err);
    };
};

handleUserEntry("ABC5656");
handleUserEntry("XYZ999");

const user = {
    username: 'Saurav Ghimire',
    link: 'https://yama.com',
    message: 'hey its me'
}; 

function validatePost (user) {
    if (user.username !== 'Saurav Ghimire') {
        return "yes";
    } if (!user.link.startsWith('https')) {
        return "NO";
    } if (user.message.includes('k')){
        return 'gg';
    } else {
        return "post appoves";
    }

};
console.log(validatePost(user)); 

function withdrawMoney (amountRequested) {
    const currentBalance = 500;
   
    return new Promise (function(resolve, reject) {

        setTimeout (function(){
            if (amountRequested <= currentBalance) {
                const reaminig = currentBalance - amountRequested;
                return resolve("withdrawl sucessful reaminig:"  + '$' + reaminig);
                
            } else {
                reject ("Insufficent FUnds");
            };

        }, 2000); 
    });
};

async function atmTransaction(amount) {
    try {
        const transcation = await (withdrawMoney(amount));
        console.log(transcation)

    } catch (err) {
        console.log(err);
    };
};


atmTransaction(200);
atmTransaction(600);

const users = [
    {id: 1, name: 'Saurav', role: 'intern'},
    {id: 2, name: 'Ram', role:'admin'},
    {id: 3, name: 'Sita', role: 'manager'},
];

function findUser (userId) {
for (const user of users) {
    if (user.id === userId) {
        return user;
    };
};
return null;
};

function checkAdminPermission (user) {
    return new Promise (function(resolve, reject) {
        setTimeout (function() {
            if (user.role === 'admin'){
                return resolve("Access Granted to Dashbooard");
            } else {
                return reject("Acess deined: ADdmins only");
            };

        }, 2000);
    });
};

async function requestDashboardAcess(userId) {
    try {
        const fondUser = findUser(userId);
        if ( fondUser === null) {
            console.log("not found");
            return ;
        }


            const result = await checkAdminPermission(fondUser);

            console.log(result);
    } catch (err) {
        console.log(err);
    };
};

requestDashboardAcess(2); 
requestDashboardAcess(1); 
requestDashboardAcess(99);