// function saveData (text) {
//     console.log('saving to database: ' + text);
// }

// function debounce (func, wait) {
//     let timeoutId;
//     return () => {
//         clearTimeout(timeoutId);

//         timeoutId = setTimeout(() => {
//             func()
//         }, wait);
//     }
// }

// const processChange = debounce(() => {
//     saveData('laptop')
// }, 2000);

// processChange();


function saveToCloud (text) {
    console.log('cloud backup complete for: ' + text);
}

function debounce  (func, wait) {
    let timeoutId;
    return (text) => {
        clearTimeout (timeoutId);

        timeoutId = setTimeout (() => {
            func(text);
        }, wait);
    };
}

const handleTyping = debounce (saveToCloud, 2000);

handleTyping("H");
handleTyping("He");
handleTyping("Hello");
