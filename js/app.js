'use strict';
var base = 0;
var randoResults = ['skyBurial', 'vikingBurial', 'tradBurial', 'scienceBurial', 'cremation', 'spaceBurial', 'seaBurial'];
var elementArray = ['#skyburial', '#viking', '#burial', '#science', '#cremation', '#space', '#sea'];

var locationBurial = 'learn.html';

function assignValue(){
  var burial = randomizer();
  for (var i = 0; i < randoResults.length; i++){
    if (burial === randoResults[i]) {
      console.log('burial',burial);
      window.location = locationBurial + elementArray[i];
    
    }
  }
}

// document.getElementById('rando').onclick = function() {
//   event.preventDefault();
//   
  

// };

var randomButton = document.getElementById('rando');

randomButton.addEventListener('click', assignValue);

// var burial;
function randomizer() {
  var randomNumber = Math.floor(Math.random() * (randoResults.length - base)+ base);
  console.log(randomNumber);
  return randoResults[randomNumber];
  
  //window.location = rando needs to connected to learn.html
}


//function randomHandler(event){
//