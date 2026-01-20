function fireWeapon () {
    console.log('BOOOM');
} 

function throttle (func, delay) {
    let isWaiting = false

    return (...args) => {
        if ( isWaiting === true) {
            return;
        }
        func(...args);

        isWaiting = true;

        setTimeout (() => {
            isWaiting = false;
        }, delay);

    }
}

const trigger = throttle(fireWeapon, 2000);


trigger(); 


function sendSMS (phoneNumber) {
    console.log('sending OTP to: ' + phoneNumber);
}

function throttle (func, delay) {
    let isWaiting = false;

    return(...args) => {
        if ( isWaiting === true) {
            return;
        }

        func(...args);
        isWaiting = true;

        setTimeout (() => {
            isWaiting = false;
        }, delay);
    }
}

const requestOTP = throttle(sendSMS, 5000);

requestOTP('9761655963');
requestOTP('9761655963');
requestOTP('9761655963');
requestOTP('9761655963');
requestOTP('9761655963');

setTimeout (() => {
    console.log('sms');
    requestOTP('9841568330');
}, 6000)