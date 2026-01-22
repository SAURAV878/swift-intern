// immutability: means once data is cerated, it never changes ,if you want to change then you have to make a whole new copy 

// const originalProfile = {
//     username: 'saurav_ghimire',
//     status: 'active',
//     skills:['JS', 'Node']
// };

// const updatedProfile = {...originalProfile, status: 'learning'};

// const finalProfile = {...updatedProfile, skills: [...updatedProfile.skills, 'Express']};

// console.log(originalProfile.status);
// console.log(finalProfile.status);
// console.log(finalProfile.skills);


const cart = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Banana", price: 5 }
];

const newCart = cart.map(item => {
    if (item.id === 1) {
        return {...item, price: 12};
    } else {
        return item
    }
});

console.log(cart[0].price);
console.log(newCart[0].name);