const heavyTask = () => {
    let bigData = new Array(1000000).join('X');

    return () => {
    console.log('task is running, I still have the data');

}
};

const  leakedFunction =  heavyTask();

 const timer = setInterval (() => {
    leakedFunction();
    if (condition) {
        clearInterval(timer);
    }
    }, 1000);


