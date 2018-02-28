'use strict';

var answers = [];
var questionsObjects = []; //instances passing into
//var questionableTitle = [];
var skyDiv = document.getElementById('sky');
var vikingDiv = document.getElementById('viking');
var greenDiv = document.getElementById('green');
var scienceDiv = document.getElementById('science');
var cremateDiv = document.getElementById('cremate');
var spaceDiv = document.getElementById('space');
var seaDiv = document.getElementById('sea');
var quizResult = document.getElementById('quizResult');
var container = document.getElementById('questionDisplay');
var choiceA = document.getElementById('choiceA'); // targeting quiz table elements to populate images
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var totalClicks = 0; 
var maxNum = 0; // highest value of clicks for the burial categories 
var keyMax = 0; // the object key that matches the maxNum value
var persistantMaxNum = [];
var persistantKeyMax = [];
quizResult.style.display = 'none';
skyDiv.style.display = 'none';
vikingDiv.style.display = 'none';
greenDiv.style.display = 'none';
scienceDiv.style.display = 'none';
cremateDiv.style.display = 'none';
spaceDiv.style.display = 'none';
seaDiv.style.display = 'none';

// object used with max function to calculate maxNum and identify keyMax
var tally = {
  sky: 0,
  viking: 0,
  green: 0,
  science: 0,
  cremate: 0,
  space: 0,
  sea: 0,
}

// questions constructor
function Questions(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  questionsObjects.push(this);
}

// questions instances
new Questions(['space','science','sky'], ['viking', 'green'], ['green'], ['cremate', 'sea']);
new Questions(['sky', 'sea'], ['viking', 'cremate'], ['green', 'sky'], ['space', 'science']);
new Questions(['sky', 'green'], ['cremate'], ['viking', 'sea'], ['science', 'space']);
new Questions(['science', 'sky'], ['green', ' cremate', 'sea'], ['viking'], ['space']);
new Questions(['sky', 'green'], ['viking', 'cremate'], ['space'], ['sea', 'science']);

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
    comparingResults();
    maxFunction();
    resultsDisplay();
    return; // breaks out of the function after 5 clicks
  }
  totalClicks++;
  render();
}

var count = 1; // declaring a counting variable to display question images

// question images rendered onto table
function render() {
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

// pushes user clicked answer onto answer array
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
  else if (event.target === choiceD) {
    answers.push(questionsObjects[totalClicks].d);
  }
  localStorage.setItem('userAnswers', JSON.stringify(answers));
}

// uses tally object to populate clicks on categories
function comparingResults() {
  for (var i = 0; i < answers.length; i++){
    for (var j = 0; j < 3; j++){
      tally[answers[i][j]]++;
    }
  }
}

// uses tally object to find maximum and return key for displaying
function maxFunction() {
  var tempArr = Object.keys(tally);
    for (var i = 0; i < tempArr.length; i++) {
      var temp2 = tally[tempArr[i]];
      if (temp2 > maxNum) {
        maxNum = temp2;
        keyMax = tempArr[i];
      }
    }
  persistantMaxNum.push(maxNum);
  persistantKeyMax.push(keyMax);
  localStorage.setItem('mostClicksOnSubjectArr', JSON.stringify(persistantMaxNum));
  localStorage.setItem('keyInTallyObjectForMaxArr', JSON.stringify(persistantKeyMax));
}

// displays highest correlation with quiz result
function resultsDisplay() {
  quizResult.style.display = 'block';
  var tempDisplay = document.getElementById(keyMax);
  tempDisplay.style.display = 'block';
}

// event listener
choiceA.addEventListener('click', handleClick);
choiceB.addEventListener('click', handleClick);
choiceC.addEventListener('click', handleClick);
choiceD.addEventListener('click', handleClick);

// local storage
/*if (localStorage.getItem('mostClickOnSubjectArr') === null) {
  render(); //render for page load if localStorage does not exist execute normal flow
  } else {
    persistantMaxNum = JSON.parse(localStorage.getItem('mostClicksOnSubjectArr'));
    persistantKeyMax = JSON.parse(localStorage.getItem('keyInTallyObjectForMaxArr'));
    render();
  }*/