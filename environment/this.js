const brand = ['yama'];

const smartLamp = {
    brand: 'xiamoi',

    showBrandRegular () {
        console.log("showBrandRegular: " + this.brand);
    },

    showBrandArrow : () => {
        console.log("showBrandArrow: " + brand);
    }

};

smartLamp.showBrandRegular();
smartLamp.showBrandArrow();


const player = {
    nickname: 'saurav',
    score: 0,

    levelUp () {
        this.score  += 10,
        console.log('Sucess! new socre for ' + this.nickname + ' is ' + this.score);
    },

    quickPeek: () => {
        console.log('current player: ' + this.nickname);
    }
};

player.levelUp();
player.levelUp();
player.levelUp();
player.quickPeek();