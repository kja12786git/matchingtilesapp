//$('document').ready(() => { //unnecessary for now
// popup control functions
let nameInputDiv = $('#name-input');
let nameinput = $('form > input');
let submitName = $('#name-input form button');
let nameFeed = $('.nameFeed');
const logs = console.log;

// Selected DOM gameboard items & items needed to feed to the gameboard buttons
const items = $('.item');
const icons1 = ['☺','☺','☆','★','♡','❤'];
const icons2 = ['1','2','3','4','5','6'];
const icons = icons2;

const slotsLngth = items.length;
var gfxLngth = icons.length;
logs(slotsLngth + ':All slots.' + gfxLngth + ':Icons(gfx)count');
// const icons = icons1.concat(icons2);

// variables for the for loop to get a range of random numbers
var z = gfxLngth;

const randValue = () => {
//    let w = Math.floor((Math.random() * z) + 0); // what was different?... only the variable name
    let x = Math.floor((Math.random() * z) + 0);
    return x;
};

const togameboard = []; //for use in generating gameboard on each load
const firstZero = []; // *** I used this arr to limit 0 index from pushing more than once, it still did not work 100% with the randomValue ...
const playLog = []; //for player in-game only
const randomLog = [];


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

const getGameboard = togameboard.forEach((ret) => {
            logs(ret + " frm getGameboard");
                if (togameboard > 0 && ret == randValue()) {
                    return ret;
                }
            return false;
        });

const newPlay = (x) => {
    items[x].addClass('newPlay');
    playLog.push(x);
    logs(x.html() +" was added to: .. ", playLog + "(play log)");
    
};

const evaluate = (x) => {
        playLog.push(x);
        logs(x + "testing");
//        timer();
};

class Get {
    constructor(timer, scoreCount, randomIndex) {
        this.timer = () => {
                let start = 0;
                setInterval(this.moveTimespan, 1000);
                this.moveTimespan(start);
        },
                
        this.moveTimespan = (x) => {
                x+=1;
                $('#timer').html(x);
        },
                
        this.scoreCount = () => {
            return 100 * this.timer;
        },
        
        this.randomIndex = randomIndex;
        
    }

}

//$(document).ready(() => { // unnecessary for now
    
// append each of the given icons to a button on the gameboard twice in random sequence
// there must be two of each and not three for the standard 3*4 gameboard.
// to do this I can push random number from [0 to desired length] to an array replace any additional copy until it is complete
// a good way may be to generate a first half randomly, and then pull values from a duplicate array to randomize the remaining half using the original values


for (let x = 0; x < slotsLngth/2; x++) { // ***I have simplified this without need for the longer code I had before. It still does not give a perfect variety of random options between a set range, but I suppose this is something I cannot evaluate with this method.
    let w = randValue();
    randomLog.push(w); logs(randomLog + " random generated log.");
    
    if (togameboard.length == 0) {
        togameboard.push(w);
        items[x].append(icons[w] + 'temp');
        continue;
    } // *** it worked perfectly one time but not consistently
    
    if (togameboard.length > 0 && getGameboard ==  w) {
        continue;
    } else {
        togameboard.push(w);
        logs(togameboard + " all made it to the gameboard.");
        items[x].append(icons[w] + 'temp');
    }
}
//  set a timer after first click which resets to 0 on the second click &&
//  set the action & scoring logic for each two clicks
    // add the onlcick function to the gameBoard elements
    items.forEach((x) => {
        items[x].addEventListener('click', newPlay());
    });



//    Docode.timer;

//}); // end of document.ready



//});