class Person {
    constructor(name) {
        this.name = name
    }
    introduce () {
        console.log(`hello, my name is ${this.name}`);
    }
}

class Intern extends Person {
    constructor(name, task) {
        super(name)
        this.task = task
    }
    work() {
        console.log(`${this.name} is busy doing ${this.task}`);
    }

}

const me = new Intern ('yama', 'learning classes');
const you = new Intern('saurva', 'building APIs');

me.introduce();
me.work();

you.introduce();
you.work();




class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`deposited ${amount}. New balance: ${this.balance}`);
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance += (this.balance * this.interestRate);
        console.log(`Interest added! New Balance for ${this.owner}: ${this.balance}`);
    }
}

const myAcc = new SavingsAccount("Saurav", 1000, 0.05);
myAcc.deposit(500);

const { owner, balance } = myAcc;
console.log(`final report: account for ${owner} has ${balance}`);

const listTransactions = (...amount) => {
    const total = amount.reduce((sum, current) => {
        return sum + current;
    }, 0);

    console.log(`transcations list: ${total}`);
};

listTransactions(1000, -900);

const calc = (rate, ...price) => {
    return price.map(p => p * rate);
}

console.log(calc(0.10, 100, 200));
console.log(calc(0.10, 50, 10, 80, 1000))

