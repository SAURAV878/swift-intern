// const queue = [
//     {name: 'ram'},
//     {name: 'sita'},
// ];

// queue.push({name: 'Gopal'});
// queue.unshift({name: 'Saurav'});
// queue.pop();

// const backQueue = [...queue];
// backQueue[0].name = 'hacker';

// queue.forEach(user => {
//     console.log(user);
// });

const products = [
    { name: "Phone", price: 500, inStock: true },
    { name: "Screen", price: 80, inStock: false },
    { name: "Cable", price: 10, inStock: true },
    { name: "Laptop", price: 1200, inStock: true }
];

const availableItems = (products.filter(p => p.inStock  == true));

const taxedPrices = availableItems.map(p => (p.price * 1.10));
console.log(taxedPrices);

const totalBill = taxedPrices.reduce ((total, price) => {
    return total + price; 
},0);
console.log(totalBill);
