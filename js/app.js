//$(document).ready(() => {
// popup control functions
let nameInputDiv = $('#name-input');
let nameinput = $('form > input');
let submitName = $('#name-input form button');
let nameFeed = $('.nameFeed');
let items = $('.item');
//const icons = ['☺','☺','☆','★','♡','❤'];
const icons = ['1','2','3','4','5','6'];
const togameboard = [];
const playLog = [];
const logs = console.log;

nameInputDiv.toggleClass('hidden');
nameInputDiv.toggleClass('popup');

// both actions should return name input and remove popup
nameinput.change(() => {
//    nameInputDiv.toggleClass('hidden');
    nameInputDiv.toggleClass('popup');
    nameFeed[1].html(nameinput.val());

});

submitName.click((event) => {
    nameInputDiv.toggleClass('popup');
    event.preventDefault();
    
});

//feed input name to display size as typing
nameinput.on('keyup', () => {
    nameFeed.html(nameinput.val());

});

$(document).ready(() => {
    
// append each of the given icons to a button on the gameboard twice in random sequence
// to do this I can push random number from [0 to desired length] to an array and pop any additional copy until it is complete
// or do this in two halfs
    let slotsLngth = items.length;
    let gfxLngth = icons.length;
    logs(slotsLngth + ':All slots.' + gfxLngth + ':Icons(gfx)count');

    for (let x = 0; x < slotsLngth; x++) {
        let z = gfxLngth - 1; //.Math.Random;
        if (z != 0 && z > slotsLngth) { z = 0}
        let w = Math.floor((Math.random() * z) + 0);
        let wo = () => {
            let y;
            while (w == 0 || togameboard.forEach(w)) {
                w = Math.floor((Math.random() * z) + 0);
                y = w;
            }
            return y;
        };
        wo;
        let ww = wo;
        logs(ww + " return from wo");
        
        if (x <= z) { togameboard.push(w);}
    console.log(togameboard);
    items[x].append(icons[w] + '☺ temp');

    }

// set a timer after first click which resets to 0 on the second click &&
// set the action & scoring logic for each two clicks
    for (let x=0; x < slotsLngth; x++) {
        let elmnt = items[x];
        elmnt.addEventListener("click", newPlay);
        
    }
    
    timer();

}); // end of document.ready

let newPlay = () => {
    this.addClass("newPlay");
    logs(this);
    
};

const evaluate = (x) => {
        playLog.push(x);
        logs(x + "testing");
//        timer();
};

const timer = () => {
    let start = 0;
    setInterval(moveTimespan, 1000);
    
    moveTimespan(start);
};

const moveTimespan = (x) => {
    let start = x;
    x+=1;
    $('#timer').html(x);
};

class Docode {
    constructor(timer, scoreCount) {
        this.scoreCount = () => {};
        this.stopListener = () => {};
        
        }
}

//});