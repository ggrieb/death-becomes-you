'use strict';
var base = 0;
var randoResults = ['skyBurial', 'vikingBurial', 'tradBurial', 'scienceBurial', 'cremation', 'spaceBurial', 'seaBurial'];
var elementArray = ['#skyburial', '#viking', '#burial', '#science', '#cremation', '#space', '#sea'];
var randomButton = document.getElementById('rando');

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

function randomizer() {
  var randomNumber = Math.floor(Math.random() * (randoResults.length - base)+ base);
  return randoResults[randomNumber];
}

randomButton.addEventListener('click', assignValue);