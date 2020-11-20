'use strict';
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

const rollDicebtn = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice")
let playerCurScore = document.querySelector(`#current--0`);
let holdbtn = document.querySelector(".btn--hold")
let finalScore = document.querySelector("#score--0")
let playerActive = document.querySelector(".player--0");
const newGame = document.querySelector(".btn--new");
let player2 = document.querySelector(".light");

const intial = function () {
    currentScore = 0;
    score = [0, 0];
    activePlayer = 0;
    playing = true;

    playerActive = document.querySelector(`.player--${activePlayer}`)
    playerActive.classList.add('player--active')
    player2.classList.remove('player--active')

    document.querySelector(`#current--0`).textContent = 0
    document.querySelector(`#current--1`).textContent = 0
    document.querySelector("#score--0").textContent = 0
    document.querySelector("#score--1").textContent = 0
    imgDice.classList.add("hidden");

    playerCurScore = document.querySelector(`#current--${activePlayer}`);

    document
        .querySelector(`.player--0`)
        .classList.remove('player--winner');
    document
        .querySelector(`.player--1`)
        .classList.remove('player--winner');

}

rollDicebtn.addEventListener("click", function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        imgDice.src = `dice-${dice}.png`;
        imgDice.classList.remove("hidden");

        if (dice !== 1) {
            currentScore += dice;
            playerCurScore.textContent = currentScore;

        } else {
            currentScore = 0;
            playerCurScore.textContent = currentScore;
            playerActive.classList.toggle('player--active')
            activePlayer = activePlayer === 0 ? 1 : 0;
            playerCurScore = document.querySelector(`#current--${activePlayer}`);
            playerActive = document.querySelector(`.player--${activePlayer}`);
            playerActive.classList.toggle('player--active')
        }
    }
});

holdbtn.addEventListener("click", function () {
    if (playing) {
        score[`${activePlayer}`] += currentScore
        finalScore = document.querySelector(`#score--${activePlayer}`);
        finalScore.textContent = score[`${activePlayer}`]

        if (score[`${activePlayer}`] >= 33) {
            playing = false;
            imgDice.classList.add("hidden");
            finalScore.textContent = "Winner!!!";
            playerCurScore.textContent = score[`${activePlayer}`];
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');

        } else {
            currentScore = 0;
            playerCurScore.textContent = currentScore;
            playerActive.classList.toggle('player--active')
            activePlayer = activePlayer === 0 ? 1 : 0;
            playerCurScore = document.querySelector(`#current--${activePlayer}`);
            playerActive = document.querySelector(`.player--${activePlayer}`);
            playerActive.classList.toggle('player--active')
        }
    }
})

newGame.addEventListener("click", intial);
