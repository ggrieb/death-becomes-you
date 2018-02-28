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

new Questions('Space' + ' Science' + ' Sky', 'Viking' + ' Green', 'Green', 'cremate' + ' Sea');
new Questions('Sky' + ' Sea', 'Viking' + ' cremate', 'Green' + ' Sky', 'Space' + ' Science');
new Questions('Sky' + ' Green', 'cremate', 'Viking' + ' Sea', 'Science' + ' Space');
new Questions('Science' + ' Sky', 'Green' + ' cremate' + ' Sea', 'Viking', 'Space');
new Questions('Sky' + ' Green', 'Viking' + ' cremate', 'Space','Sea' + ' Science');

//method to handle clicks on question images
function handleClick() {
  console.log('event is being passed.');
  userAnswers();
  if (totalClicks === questionsObjects.length - 1) {
    choiceA.removeEventListener('click', handleClick);
    choiceB.removeEventListener('click', handleClick);
    choiceC.removeEventListener('click', handleClick);
    choiceD.removeEventListener('click', handleClick);
    container.style.display = 'none';
    return; // breaks out of the function after 5 clicks
  }
  totalClicks++;
  render();
}

var count = 1; // declaring a counting variable to display question images

function render(){
  choiceA.src = 'img/q' + count + 'a.jpg';
  //choiceA.alt =
  // choiceA.title =
  choiceB.src = 'img/q' + count + 'b.jpg';
  //choiceA.alt =
  // choiceA.title =
  choiceC.src = 'img/q' + count + 'c.jpg';
  //choiceA.alt =
  // choiceA.title =
  choiceD.src = 'img/q' + count + 'd.jpg';
  //choiceA.alt =
  // choiceA.title =
  count += 1;

}
render();

function userAnswers(){

  if (event.target === choiceA){
    answers.push(questionsObjects[totalClicks].a);
  }
  else if (event.target === choiceB) {
    answers.push(questionsObjects[totalClicks].b);
  }
  else if (event.target === choiceC) {
    answers.push(questionsObjects[totalClicks].c);
  }
  else if(event.target === choiceD){
    answers.push(questionsObjects[totalClicks].d);
  }
  localStorage.setItem('userAnswers', JSON.stringify(answers));
}
/*function comparingResults() {
  var slicedAnswers = answers.slice(' ');
  for (var i = 0; i < answers.length; i++){
  if (answers[i] === ) {

  }
    
  }
*/
//need to fill the array with images
//event.target.source?


// event listener
choiceA.addEventListener('click', handleClick);
choiceB.addEventListener('click', handleClick);
choiceC.addEventListener('click', handleClick);
choiceD.addEventListener('click', handleClick);

//fix the handleClick gutter alert
