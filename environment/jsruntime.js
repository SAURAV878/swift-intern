console.log(a);
let a = 10 ;



const hello= () => {
  console.log("Hello");
}

hello();

let x = 10;
if (true) {
    let x = 20;
    console.log("inside: ", x);
}

console.log('outside: ', x);

if (true) {
    var y = 50;
}

console.log('value of y: ', y);

console.log(myVar);
var myVar = 'i am here';



function innerTask () {
    console.log('2. i am doing the inner task ');
}

function  outerTask () {
    console.log('1. Starting the outer task');

    innerTask();
    console.log('3. finishing the outer task');
}

console.log('O. start the program');
outerTask();
console.log('4. end the program');

secretMessage()

console.log(myBankBalance);

function secretMessage (){
    console.log('the safe is open');
}

var myBankBalance = 100;

console.log(mySecretPin);
let mySecretPin = 1234;


function jailHouse () {
    if (true){
        var prisoner = 'i am here locked in '
    }
    console.log('inside: prisoner')

}

jailHouse();
console.log(prisoner);

greeetRegular();
greetArrow();

function greeetRegular(){
    console.log('hey ')

}

var greetArrow = () => {
    console.log('you')

}