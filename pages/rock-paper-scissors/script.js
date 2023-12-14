const buttons = document.querySelectorAll('button');
const userChoiceSpan = document.querySelector('.user-choice');
const computerChoiceSpan = document.querySelector('.computer-choice');
const resultElement = document.querySelector('.game-result');
const resultStatsContainer = document.querySelector('.result-stats-hld');
const resultContainer = document.querySelector('.result');
const statsContainer = document.querySelector('.stats');
const winCountSpan = document.querySelector('#win-count');
const loseCountSpan = document.querySelector('#lose-count');
const drawCountSpan = document.querySelector('#draw-count');
const choices = ['paper', 'rock', 'scissors'];

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        resultStatsContainer.classList.remove('hidden');
        resultElement.classList.add('hidden');
        const userChoice = button.id;

        userChoiceSpan.textContent = userChoice;

        const animationDuration = 2000;

        let animationInterval;
        let animationFrame = 0;
        let computerChoiceIndex = 0;

        function animateComputerChoice() {
            animationFrame++;
            if (animationFrame <= animationDuration / 100) {
                if (computerChoiceIndex >= choices.length) {
                    computerChoiceIndex = 0;
                }
                const computerChoice = choices[computerChoiceIndex];
                computerChoiceSpan.textContent = computerChoice;
                computerChoiceIndex++;
                requestAnimationFrame(animateComputerChoice);
            } else {
                clearInterval(animationInterval);

                setTimeout(() => {
                    const randomIndex = Math.floor(Math.random() * 3);
                    const computerChoice = choices[randomIndex];
                    computerChoiceSpan.textContent = computerChoice;

                    const result = determineWinner(userChoice, computerChoice);
                    resultElement.classList.remove('hidden');
                    displayResult(result);
                }, 500); 
            }
        }

        animationInterval = requestAnimationFrame(animateComputerChoice);
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
