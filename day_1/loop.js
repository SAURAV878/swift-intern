for (let i = 5; i>0; i--) {
    console.log('coundowub' + i);
};

console.log('lift');

for (let i = 9; i > 0; i --){
    if (i === 3) {
        break;
    }
    console.log("print: " + i);
};

let progress = 0;

while (progress < 100) {
    console.log("dowlanding: " + progress);
    progress += 20;
};

let pass = "";
const correctPassword = "1234";
let attempts = 0;

while (pass !== correctPassword) {
    attempts++;
    console.log("attempt" + attempts+ "guess");

    if (attempts === 3){
        pass = "1234";
    }
    
}

console.log("accses: "+ attempts);

