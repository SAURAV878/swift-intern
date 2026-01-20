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
trigger();
trigger();
trigger();
trigger();

