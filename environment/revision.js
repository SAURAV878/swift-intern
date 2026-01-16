 const users = [
    { name: "saurav", role: "intern", active: true },
    { name: "ram", role: "admin", active: false },
    { name: "sita", role: "admin", active: true },
    { name: "gopal", role: "intern", active: false }
];

const active = users.filter(u => u.role === 'admin' && u.active === true);

const check = active.map(u => u.name.toUpperCase());
console.log(check);

// console.log(users);

// Hoisting: Regular functions are moved to the top by the JS engine, so you can call them early. Arrow functions (being variables) are not and will crash if called early.
// Syntax: Arrow functions provide a shorter, cleaner syntax (the => symbol).
// This: Regular functions have their own "this" (the owner). Arrow functions don't have their own; they borrow "this" from where they were created.