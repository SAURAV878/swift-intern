const getUser = async () => {
    try {
        console.log('fetching data');

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        const data = await response.json();

        console.log(data.company.bs);
    } catch (error) {
        console.log('Error', error);
    }
        
};

getUser();