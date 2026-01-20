function sum (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }

}

console.log(sum(100)(2)(3));

const god = level => message => {
    return `[${level}]: ${message}`;
}


const info = god("INFO");
const error = god("ERROR");

console.log(info("Connected to DB")); 
console.log(error("Connection Failed"));

const greet = greeting =>  name => {
    return `${greeting}: ${name}`;
}

const sayhello = greet ('hello');


console.log(sayhello('it me saurav'));
console.log(sayhello('it me yama'));