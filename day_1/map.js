const dollars = [1, 5 , 10];

const rupees = dollars.map((d) => {
    return d * 130;
});

console.log(dollars);
console.log(rupees);

//upper case name
const names = ['saurav', 'ram', 'sita'];

const bigNames = names.map((n) => {
    return n.toUpperCase();
});

console.log(bigNames);

//string transformation 
const roles = ["admin","editor", "guest"];

const userRoles = roles.map((r) => {
    return "User_ " + r;
});

console.log(userRoles);

//data EXtractor
const employess = [
    {name: 'Saurav', id: 101},
    {name: 'Ram', id: 102},
    {name: 'Sita', id: 103}
];

const rollNo = employess.map((emp) => {
    return emp.id;
});

console.log(rollNo)


//logic
const userStatus = [true, false, true, true];

const readableStatus = userStatus.map((u) => {
    if (u === true) {
        return "online";
    } else {
        return "offline";
    }
});

console.log(readableStatus);

//math
const originalPrices = [100, 200, 500, 1000];

const salePrices = originalPrices.map((price) => {
    return price * 0.9;
});

console.log(salePrices)