const getData = (() => {
    return new Promise ((resolve, reject) => {
        resolve('it is suuny');
    });
})

getData()
    .then((message) => {
        console.log(message);
    })
    .catch ((err)=> {
        console.log(err);
    });

const showAwait = async () => {
    try {
        const data = await (getData());
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

showAwait();