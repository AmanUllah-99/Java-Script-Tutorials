// File: num.js
// This is a simple number guessing game.
// The user has to guess a number between 1 and 100.
// The user has 10 attempts to guess the number.
// The game provides feedback on whether the guess is too high or too low.
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastRasult = document.querySelector('.lastResult');
const lowORHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGesses = [];
let numGusses = 1;
 let playGame = true;

 if (playGame) {
   submit.addEventListener('click', function(e){
   e.preventDefault()
  let guess = userInput.value
  validGussNum(guess)
   })
  
 };

 function validGussNum (guess){
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  }else if(guess < 1){
   alert('Please Enter A  Number More Than One');
  }
  else if(guess > 100){
    alert('Please Enter A  Number Less Than Hundered');
  }else{
    preGesses.push(guess)
    if (numGusses === 11) {
      displayGuss(guess)
      displayMessage(`Game Over .Ramdom Number Was Is ${randomNumber}`);
      gameEnd();
    }else{
      displayGuss(guess);
    cheakGussNum(guess);
    }
  }
 };

 function cheakGussNum (guess){
  if (guess === randomNumber) {
    displayMessage(`YOu Guessed It Right`);
    gameEnd()
  } else if(guess < randomNumber){
      displayMessage(`Guess Number Is TOO Low`);
  }
  else if(guess > randomNumber){
      displayMessage(`Guess Number Is TOO High`);
  }
 } 

 function displayGuss(guess){
  userInput.value = '';
  guessSlot. innerHTML +=`${guess}  `;
  numGusses++;
  lastRasult. innerHTML = `${11 - numGusses}`;

 }

 function displayMessage(message){
     lowORHi.innerHTML= `<h2>${message}</h2>`;
 }

 function gameEnd(){
  userInput.value = '';
 userInput.setAttribute('disabled','');
 p.classList.add('button')
 p.innerHTML = `<h1 id="newGame"> Start New Game</h1>`;
 startOver.appendChild(p);
 playGame = false;
 gameStart();
 }
 function gameStart(){
   const startNewGame= document.querySelector('#newGame');
   startNewGame.addEventListener('click', function(e){
     randomNumber = parseInt(Math.random() * 100 + 1);
    preGesses = [];
    numGusses = 1;
    guessSlot.innerHTML= '';
    lastRasult. innerHTML = `${11-numGusses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

   })
 }
