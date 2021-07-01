const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');

let currentScore = 0;
let activePlayer = 0;

rollDice.addEventListener('click', () => {
    dice.classList.remove('hidden');
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);
    dice.src = `dice-${randomNum}.png`
    if (randomNum !== 1) {
        currentScore += randomNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        console.log('switch');
    }

});