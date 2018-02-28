'use strict';

var randoResults = [skyBurial, vikingBurial, tradBurial, scienceBurial, cremation, spaceBurial, seaBurial];

var randomButton = document.getElementById('rando');

var skyBurial = document.getElementsByName("skyburial").href = "learn.html";
var vikingBurial = document.getElementsByName("viking").href = "learn.html";
var tradBurial = document.getElementsByName("burial").href = "learn.html";
var scienceBurial = document.getElementsByName("science").href = "learn.html";
var cremation = document.getElementsByName("cremation").href = "learn.html";
var spaceBurial = document.getElementsByName("space").href = "learn.html";
var seaBurial = document.getElementsByName("sea").href = "learn.html";

function randomizer(event) {
 return Math.floor(Math.random() * randoResults.length);
}

randomButton.addEventListener('click', randomizer);