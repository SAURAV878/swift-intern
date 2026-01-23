function Robot (model) {
    this.model = model;
}

Robot.prototype.identify = function () {
    console.log('i am model: ' + this.model);
}

const r1 = new Robot('T-800');
const r2 = new Robot('R2-D2');
r1.identify();
r2.identify();

console.log(r1.identify === r2.identify);

Robot.prototype.charge = function() { 
    console.log(this.model + " is charging..."); 
};

r1.charge();
r2.charge();