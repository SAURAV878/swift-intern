//simple action
const users = ['Saurav', 'Ram', 'Sita'];

users.forEach((name) => {
    console.log("Welcome, " + name)
});

//using an outside variables
const prices = [100, 200, 300];

let total = 0;
prices.forEach((price) => {
    total =  total + price;
});
console.log(total);

//obj
const products = [ 
    {name: "laptop", stock: 10},
    {name: "Mouse", stock: 0},
    {name: "keyboard", stock: 5}
];

products.forEach((p) => {
    console.log(p.name, "has " + p.stock, "items left");
});

//using if inside loop
const ages = [16, 21, 18, 14, 25];

ages.forEach((age) => {
    if (age >= 18) {
        console.log("Accesses Granted for people " + age, "or older")
    } else {
        console.log("Denied")
    }
});

//search and destory
const emails = ["ram@gmail.com", "sita@gmail.com", "gopal@gmail.com", "admin@outlook.com"];

let gmailFound = []
emails.forEach((email) => {
    if (email.includes("gmail.com")) {
        gmailFound.push(email); 
    }
});
console.log("Found Gmail user: ", gmailFound); 