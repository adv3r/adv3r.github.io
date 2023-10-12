let buttons = document.querySelectorAll('button');
let userChoiceSpan = document.querySelector('.user-choice');
let computerChoiceSpan = document.querySelector('.computer-choice');
let resultElement = document.querySelector('.game-result');
let resultContainer = document.querySelector('.result');
let statsContainer = document.querySelector('.stats');
let winCountSpan = document.getElementById('win-count');
let loseCountSpan = document.getElementById('lose-count');
let drawCountSpan = document.getElementById('draw-count');
let choices = ['paper', 'rock', 'scissors'];

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let userChoice = button.id;
        let randomIndex = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomIndex];

        userChoiceSpan.textContent = userChoice;
        computerChoiceSpan.textContent = computerChoice;

        let result = determineWinner(userChoice, computerChoice);
        displayResult(result);
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        drawCount++;
        return "Draw!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        winCount++;
        return "You win!";
    } else {
        loseCount++;
        return "You lose!";
    }
}

function displayResult(result) {
    resultElement.textContent = result;
    resultElement.className = 'game-result';
    if (result === "You win!") {
        resultElement.classList.add('win');
    } else if (result === "You lose!") {
        resultElement.classList.add('lose');
    } else if (result === "Draw!") {
        resultElement.classList.add('draw');
    }
    resultContainer.classList.remove('hidden');
    statsContainer.classList.remove('hidden');

    winCountSpan.textContent = winCount;
    loseCountSpan.textContent = loseCount;
    drawCountSpan.textContent = drawCount;
}
