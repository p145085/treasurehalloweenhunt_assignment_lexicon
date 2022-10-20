/*
* Function that initiates the whole Game application.
*/
var score = 0;

function init(){
  initGameUI();
  // getImageFromPixels();
}

function initGameUI(){
  // Call functions that creates the Game UI
  initChests();
  initScoreBoard();
  initRefreshButton();
  initChestEventListeners();
}

function initChests(){
  var tar = document.getElementById('chests');
    for (i = 0; i < 3; i++){
      var img = document.createElement('img');
      img.id = 'chest' + i;
      img.src = '/images/chest-closed.png';
      tar.appendChild(img);
    }
}

function initScoreBoard(){
  var tar = document.getElementById('scoreBoard');
  var par = document.createElement('p');
  par.id = 'scoreParagraph';
  tar.appendChild(par);
}

function initRefreshButton(){
var tar = document.getElementById('game-wrapper');
var ref = document.createElement('button');
ref.id = 'refresh-button';
ref.innerHTML = "Try again!";
ref.onclick = refresh;
tar.appendChild(ref);
}

function initChestEventListeners() {
  var zero = document.getElementById('chest0');
  var one = document.getElementById('chest1');
  var two = document.getElementById('chest2');

  zero.addEventListener('click', chestClicked);
  one.addEventListener('click', chestClicked);
  two.addEventListener('click', chestClicked);
}

function placeTreasure(){
  let amount = 3;
  let rand = Math.floor(Math.random() * 3) + 1;
  
  return rand;
}

function chestClicked(e){
  var val = placeTreasure();

  if (e.target.id == 'chest' + val){
    e.target.src = '/images/crystal-scull.png';
    score += 5;
    removeChestEvents();
  } else if (e.target.id !== 'chest' + val){
    e.target.src = '/images/chest-open.png';
    removeChestEvents();
  }
  
}

// function getImageFromPixels(){
//   // make a request towards pixels API and get 1 Diamond image
//   // 563492ad6f917000010000011d8afd772e054068975504c135f0c84a
//   import { createClient } from 'pexels';
//   const client = createClient('563492ad6f917000010000011d8afd772e054068975504c135f0c84a');
//   const query = 'Diamond';

  
//   client.photos.search({ query, per_page: 1 }).then(photos => {foreach.console.log(photos)});

// }

function refresh(){
  const element = document.getElementById('refresh-button');
  element.remove(); 

  let zero = document.getElementById('chest0');
  let one = document.getElementById('chest1');
  let two = document.getElementById('chest2');

  zero.remove(); one.remove(); two.remove();

  init();

  var tar = document.getElementById('scoreParagraph');
  tar.innerText = "Your score is: " + score;
}

function removeChestEvents(){
  var zero = document.getElementById('chest0');
  var one = document.getElementById('chest1');
  var two = document.getElementById('chest2');

  zero.removeEventListener('click', chestClicked);
  one.removeEventListener('click', chestClicked);
  two.removeEventListener('click', chestClicked);
}