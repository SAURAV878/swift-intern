const queue = [
    {name: 'ram'},
    {name: 'sita'},
];

queue.push({name: 'Gopal'});
queue.unshift({name: 'Saurav'});
queue.pop();

const backQueue = [...queue];
backQueue[0].name = 'hacker';

queue.forEach(user => {
    console.log(user);
})




