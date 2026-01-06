const value = [1, 2, 3];

const oldvalue = value.filter((v) => {
    return v < 3;
});

console.log(oldvalue)

//in stock 
const products = [
    {name: "laptop", instock: true},
    {name: "Mouse", instock: false}, 
    {name: "Keyboard", instock: true},
     {name: "Monitor", instock: false},
];

const availableProducts = products.filter((p) => {
    return (p.instock === true) 
});

console.log (availableProducts);

//passing Marks , 
const marks = [45, 80, 60, 32, 55, 20];

const passingMarks = marks.filter((m) => {
    return m >= 50;
});


console.log(passingMarks);

//short word 
const tool = ['node', 'mongoDB', 'express', 'js'];

const char = tool.filter((t) => {
    return t.length > 3;
});

console.log(char);

//objects
const users = [
    {name: 'ram', age: 52},
    {name: 'saurav', age: 22},
    {name: 'hari', age:12},
    {name: 'sita', age: 2},
];

const adults = users.filter((users) => {
    return users.age >= 18;
});

console.log(adults);