// const processWithdrawal = (amount) => {
//     if ( amount >= 1000) {
//         throw new Error ('limit Exceed');
//     }else if (amount <= 0 ) {
//         throw new Error ('invalid amount');
//     } else {
//         console.log(`Withdrawl of ${amount} succesfully !`);
//     }

// };

// try {
//     processWithdrawal(5000);
// } catch(err) {
//     console.log('error: ' + err);
// } finally {
//     console.log('transcation ended. Please take your card');
// }

const newUser = {
    username: 'saurav',
    password: '1234567'
};

const validateUser = (userObj) => {
    if ( !userObj.username) {
        throw new Error ('MISSING_USERNAME');
    } else if (userObj.password.length <= 6 ) {
        throw new Error ('PASSWORD_TOO_SHORT');
    } else {
        console.log(`User ${userObj.username} is valid !`);
    }
};

try {
    validateUser(newUser);
} catch (err) {
    console.log('error: ' + err);
} finally {
    console.log('System: connection to database closed');
}

