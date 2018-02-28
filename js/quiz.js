'use strict';

var answers = [];
var questionsObjects = []; //instances passing into
//var questionableTitle = [];
var container = document.getElementById('table');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var totalClicks = 0;

var tally = {};

function Questions(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  questionsObjects.push(this);
}

new Questions(['space','science','sky'], ['viking', 'green'], 'green', ['cremate', 'sea']);
new Questions(['sky', 'sea'], ['viking', 'cremate'], ['green', 'sky'], ['space', 'science']);
new Questions(['sky', 'green'], 'cremate', ['viking', 'sea'], ['science', 'space']);
new Questions(['science', 'sky'], ['green', ' cremate', 'sea'], 'viking', 'space');
new Questions(['sky', 'green'], ['viking', 'cremate'], 'space',['sea', 'science']);

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
function comparingResults() {


  for (var i = 0; i < answers.length; i++){

    if (tally.answers[i]){
      tally[answers[i]]++;
    } else {
      tally[answers[i]] = 1;
    }
  }

}


comparingResults();



// event listener
choiceA.addEventListener('click', handleClick);
choiceB.addEventListener('click', handleClick);
choiceC.addEventListener('click', handleClick);
choiceD.addEventListener('click', handleClick);

//fix the handleClick gutter alert
