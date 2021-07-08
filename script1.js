const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const holdScore = document.querySelector('.btn--hold')
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const player1 = document.querySelector('.player--0 ');
const player2 = document.querySelector('.player--1')
const newGame = document.querySelector('.btn--new');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameState = true;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    setTimeout(function () {
        dice.classList.add('hidden');
        gameState = true;
    }, 500);
    gameState = false;
};

rollDice.addEventListener('click', () => {
    if (gameState) {
        dice.classList.remove('hidden');
        const randomNum = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${randomNum}.png`
        if (randomNum !== 1) {
            currentScore += randomNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

holdScore.addEventListener('click', () => {
    if (gameState) {
        score[`${activePlayer}`] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = score[`${activePlayer}`];
        if (score[`${activePlayer}`] < 20) {
            switchPlayer();
        } else {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            gameState = false;
        }
    }
});

newGame.addEventListener('click', () => {
    gameState = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    dice.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    currentPlayer1.textContent = 0;
    currentPlayer2.textContent = 0;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
});