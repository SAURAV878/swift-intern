const user = [
    { name: "  SAURAV  ", pass: "1234567" },
    { name: "  RAM  ", pass: "123" }
];

const utils = {
    formatName(name) {
        return name.trim().toLowerCase();
    },

    wait(ms) { 
        return new Promise (resolve => 
            setTimeout (resolve, ms));
    },

    isPasswordValid(pass) {
        if (pass.length > 6) {
            return true
        } else {
            return false
        }
    }

}

const processUsers = async()  => {
    const result = user.filter(u => (
        utils.isPasswordValid(u.pass)
    ));

    const term = result.map(u => ({
        ...u, name: utils.formatName(u.name)
    }));

    await utils.wait(2000);

    term.forEach(u => {
        console.log('valid user ' + u.name + ' is ready');
    });

};

try {
    processUsers();
} catch (err) {
    console.log(err);
}