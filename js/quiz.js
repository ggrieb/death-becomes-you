'use strict';

var answers = [];
var questionsObjects = []; //instances passing into
var questionableTitle = [];
var container = document.getElementById('table');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var totalClicks = 0;

function Questions(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  questionsObjects.push(this);
}

new Questions('Sky', 'Space' + ' Sea', 'Viking', 'Science' + ' Green');
new Questions('Space', 'Sky', 'Green' + ' Science', 'Viking' + ' Sea');
new Questions('Viking' + ' Green', 'Sea', 'Science' + ' Space', 'Sky');
new Questions('Sky', 'Viking' + ' Science', 'Space' + ' Sea', 'Green');
new Questions('Sky' + ' Sea', 'Viking', 'Science' + ' Space', 'Green');

//method to handle clicks on question images
function handleClick(event) {
  if (event.target.id === container) {
    alert('Avoid early death and click inside the images.');
  }
  console.log('event is being passed.');
  if (totalClicks === questionsObjects.length - 1) {
    container.removeEventListener('click', handleClick);
  }
  totalClicks++;
}

//need to fill the array with images
//event.target.source?


// event listener

container.addEventListener('click', handleClick);

//fix the handleClick gutter alert 