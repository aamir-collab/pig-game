'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const curr0 = document.querySelector('#current--0');
const curr1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score, currentScore, activeplayer, playing;

const init = function () {
  currentScore = 0;
  score = [0, 0];
  activeplayer = 0;
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

buttonRoll.addEventListener('click', function () {
  if (playing) {
    const ran = Number(Math.trunc(Math.random() * 6) + 1);
    console.log(ran);
    dice.classList.remove('hidden');
    dice.src = `dice-${ran}.png`;
    if (ran != 1) {
      currentScore += ran;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});
buttonHold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 10) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});
buttonNew.addEventListener('click', init);
{
}
