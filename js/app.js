'use strict';

// This JS is for the Random button from our landing page that gives the user a random burial result on the Learning Page.
var base = 0; //Is the minimum in our random function iteration
var randoResults = ['skyBurial', 'vikingBurial', 'tradBurial', 'scienceBurial', 'cremation', 'spaceBurial', 'seaBurial'];
var elementArray = ['#skyburial', '#viking', '#burial', '#science', '#cremation', '#space', '#sea'];
var randomButton = document.getElementById('rando');

// locationBurial is to redirect the user to the learn.html page
var locationBurial = 'learn.html';

// The two functions assign a random burial that links to the elementArray which redirects to the anchor tag on the learn page.
function assignValue(){
  var burial = randomizer();
  for (var i = 0; i < randoResults.length; i++){
    if (burial === randoResults[i]) {
      window.location = locationBurial + elementArray[i];
    }
  }
}

function randomizer() {
  var randomNumber = Math.floor(Math.random() * (randoResults.length - base)+ base);
  return randoResults[randomNumber];
}

randomButton.addEventListener('click', assignValue);