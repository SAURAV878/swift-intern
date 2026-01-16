const world = 'Earth';

function country () {
    const myCountry = 'Nepal';
    if (true) {
        const city = 'kathmandu';
        console.log(world);
        console.log(myCountry);
        console.log(city);
    };
    console.log('form inside the function');
    console.log(myCountry);
}

country();
console.log('from global');
console.log(world);