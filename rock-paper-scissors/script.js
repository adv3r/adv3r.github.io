const buttons = document.querySelectorAll('button');
const userChoiceSpan = document.querySelector('.user-choice');
const computerChoiceSpan = document.querySelector('.computer-choice');
const resultElement = document.querySelector('.game-result');
const resultContainer = document.querySelector('.result');
const choices = ['paper', 'rock', 'scissors'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const randomIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomIndex];

        userChoiceSpan.textContent = userChoice;
        computerChoiceSpan.textContent = computerChoice;

        const result = determineWinner(userChoice, computerChoice);
        displayResult(result);
    });
});

function determineWinner(user, computer) {
    if (user === computer) {
        return "Draw!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
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
}
