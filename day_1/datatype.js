const userName = "ram"; //string
const userAge = "52"; //number

const userProfile = {
    name: userName,
    age : userAge,
    role: "backend intern",
    abc() {
        console.log("hey");
        console.log(this);
    }
};
console.log(this);
userProfile.abc()

const obj = {
    value: 10,
    show: () => {
        console.log(this.value);

    }
};
obj.show()