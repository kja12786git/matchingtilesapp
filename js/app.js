$(document).ready(() => {
// popup control functions
let nameInputDiv = $('#name-input');
let nameinput = $('form > input');
let submitName = $('#name-input form button');
let nameFeed = $('.nameFeed');
let items = $('.item');
const icons1 = ['☺','☺','☆','★','♡','❤'];
const icons2 = ['1','2','3','4','5','6'];
//const icons = icons1.concat(icons2);
const icons = icons2;
const togameboard = []; //for use in generating gameboard on each load
const firstZero = []; // for purposes of gameboard
const playLog = []; //for player in-game only
const randomLog = [];

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

let newPlay = () => {
    this.addClass("newPlay");
    playLog.push(this);
    logs(this +" was added to: .. ", playLog + "(play log)");
    
};

const evaluate = (x) => {
        playLog.push(x);
        logs(x + "testing");
//        timer();
};


class Docode {
    constructor(timer, scoreCount, stopListener, randomIndex) {
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
        
        this.stopListener = stopListener,
        this.randomIndex = randomIndex;
        
    }

}

//$(document).ready(() => {
    
// append each of the given icons to a button on the gameboard twice in random sequence
// there must be two of each and not three for the standard 3*4 gameboard.
// to do this I can push random number from [0 to desired length] to an array replace any additional copy until it is complete
// a good way may be to generate a first half randomly, and then pull values from a duplicate array to randomize the remaining half using the original values
    const slotsLngth = items.length;
    const gfxLngth = icons.length;
    logs(slotsLngth + ':All slots.' + gfxLngth + ':Icons(gfx)count');

    for (let x = 0; x < slotsLngth/2; x++) { // this is not putting accurate results, however, it does function well depsite
        let z = gfxLngth; //.Math.R`andom;
        if (z != 0 && z > slotsLngth) { z = 0}
        //get a quality random return of numbers ranging from all from 0 to length of available variety to push to the gameboard
        var w = Math.floor((Math.random() * z) + 0);
        w = Number(w);
        randomLog.push(w); logs(randomLog + " random generated log.");
        
        // find each index value in the gameboard
        let getGameboard = togameboard.forEach((ret) => {
            logs(ret + " frm getGameboard");
                if (ret == w) {
                    return ret;
                }
            return false;
        });       
        
    /* wo() will check random returns of 0 & replace them with a new random return that is also within the above range. This should help to fill all available slots with without duplicating one. This can be done manually if needed, however, automation is better to get it to be scalable to any gameboard size if I expand the game.*/
        let neww;
        let wo = () => {
            neww = Math.floor((Math.random() * z) + 0);            
            // allow for only one 0 to push to gameboard
                if (w == 0 && firstZero.length == 0 && getGameboard === false) {
                firstZero.push(w); togameboard.push(w);
            } else {
                logs(w + " is a duplicate, changing to new.");
//                w = neww;
            }
            
                if (neww != undefined && getGameboard != neww) {
                    return neww;        
                } else {
                    wo();
                }
                    
            };
            
//       wo();
        let ww = wo(); logs(ww + " return from wo()");
//        ww;

        // catch other random duplicates in first set by running a function to find and replace duplicates
/*        let siii = (input) => {
            if (input === w) {
                logs(w + " is the duplicate found!");
            } else { return false}
            
        };*/
        // call this function to find duplicates pushed about to be pushed to the gameboard and get a new random before pushing any duplicate to the gameboard array
        if (w == 0) { w = ww;}

        if (x <= z) { togameboard.push(w);} //limits amount of pushed items to gameboard to desired length frm array of available options
        
        items[x].append(icons[w] + '☺ temp'); // use gameboard array as reference to push to the matching DOM gameboard.

    }

// set a timer after first click which resets to 0 on the second click &&
// set the action & scoring logic for each two clicks
    for (let x=0; x < slotsLngth; x++) {
        let elmnt = items[x];
        elmnt.addEventListener("click", newPlay(elmnt));
    }
    
//    Docode.timer;

}); // end of document.ready



//});