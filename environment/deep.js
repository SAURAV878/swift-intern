const user = {
    name: "Saurav",
    settings: {
        theme: "dark",
        notifications: true
    }
};

const shallowUSer = {...user};

shallowUSer.settings.theme = 'light';

console.log(user.settings.theme);


const deepUser = JSON.parse(JSON.stringify((user)));
deepUser.settings.theme  = 'blue';
console.log(user.settings.theme);