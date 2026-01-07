const interBot = {
    name: "saurav",

    stayStatus: function(leran, oky) {
        if (leran && oky) {
            return ( this.name + "i am learning node.js");
        } else {
            return("no he hasnt");
        }
    }
};

console.log(interBot.stayStatus(true, true));

const canPurchase = (orderQuantity, stockAvailable) => {
    if (orderQuantity >= 0 && orderQuantity <= stockAvailable) {
        return ("they can buy item");
    } else {
        return ("they cant buy item");
    }
};

const item = (canPurchase(15, 10));
console.log(item);

function user(isMember, overdueCount) {
    if (isMember === true && overdueCount === 0) {
        return ("user is allowed to borrow a book");
    } else {
        return ("he cant");
    }
};

const buy = (user(true, 2));
console.log(buy);

const getDiscount = (isStudnet, isSenior) => {
    if (isStudnet === true || isSenior === true) {
        return ("they got dicsount price: $50");
    } else {
        return ("they didnot get discount price=: $100");
    }
};

const discount = (getDiscount(false, true));
const dis =  (getDiscount(false, false));
console.log(discount);
console.log(dis);
 
const checkServerStatus = (isUp) => {
    if (!isUp) {
        return("servver is not running");
    } else {
        return ("system is ok");
    }
};

const server = (checkServerStatus(false));
const ser = (checkServerStatus(true));

console.log(server);
console.log(ser);