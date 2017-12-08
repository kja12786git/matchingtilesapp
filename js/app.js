//$(document).ready(() => {

// popup control functions
let nameInputDiv = $('#name-input');
let nameinput = $('form > input');
let submitName = $('#name-input form button');
let nameFeed = $('.nameFeed');
nameInputDiv.toggleClass('hidden');
nameInputDiv.toggleClass('popup');

// both actions should return name input and remove popup
nameinput.change(() => {
//    nameInputDiv.toggleClass('hidden');
    nameInputDiv.toggleClass('popup');
    nameFeed[1].text(nameinput.val());

});
submitName.click((event) => {
    nameInputDiv.toggleClass('popup');
    event.preventDefault();
    
});

//feed input name to display size
nameinput.on('keyup', () => {
    nameFeed.text(nameinput.val());

});


let items = $('.items');

//});
