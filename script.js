'use strict';



const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); 
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');


let  scores, currentScore , activePlayer , playing ;

const init = function (){

   scores = [0,0];
    currentScore = 0;
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0; 
    current0El.textContent = 0;
    current1El.textContent = 0;

    
    diceEl.classList.add('hidden');




    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

}

init();

const switchPlayer = function(){
    document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0;

        activePlayer = activePlayer === 0 ? 1 : 0 ;

         player0El.classList.toggle('player--active');
         player1El.classList.toggle('player--active');
};


btnRoll.addEventListener('click',function()
{   if (playing ) {


    //generate a random dice roll and display dice
    // if it is one switch to next player

    const dice =Math.trunc( Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `../images/dice-${dice}.png` ;

    //to check if it is one .... 
    if(dice !== 1 ){

        currentScore += dice ;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
         //current0El.textContent = currentScore;   
    }
    else{
        //switching to next player
        switchPlayer();


    }
}
});

 btnHold.addEventListener('click',function(){

    if(playing) {

    
    //add current score to main score
    //if less than 100 swtich to another if 100 wins
    scores[activePlayer] += currentScore ;
  
    
    document.getElementById (`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20) {

        playing = false ;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
   else{    
            switchPlayer();
    }
}

 }) ;

 btnNew.addEventListener('click',init );

 

    


    
    



