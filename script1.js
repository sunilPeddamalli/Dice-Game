const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const holdScore = document.querySelector('.btn--hold')
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
};

rollDice.addEventListener('click', () => {
    dice.classList.remove('hidden');
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);
    dice.src = `dice-${randomNum}.png`
    if (randomNum !== 1) {
        currentScore += randomNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

holdScore.addEventListener('click', () => {
    score[`${activePlayer}`] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = score[`${activePlayer}`];
    if (score[`${activePlayer}`] < 20) {
        switchPlayer();
    } else {
        console.log('Score >= 20');
    }
});