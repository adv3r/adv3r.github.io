function checkQuiz() {
    var quizForm = document.getElementById("quizForm");
    var quizResults = document.getElementById("quizResults");

    var correctAnswers = {
        "odp-quiz1": "bardzo-uroczy",
        "odp-quiz2": "floppa",
        "odp-quiz3": "piątek",
        "odp-quiz4": "tak"
    };

    var userAnswers = {};
    var questions = quizForm.querySelectorAll("input[type='radio']:checked");

    if (questions.length < 4) {
        quizResults.innerHTML = "<h5>Proszę udzielić odpowiedzi na wszystkie pytania przed sprawdzeniem quizu.</h5>";
        return;
    }

    questions.forEach(function (question) {
        userAnswers[question.name] = question.value;
    });

    var correctCount = 0;

    for (var key in userAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            correctCount++;
        }
    }

    var resultText = "<h5>Twój wynik: " + correctCount + " poprawnych odpowiedzi z 4 pytań.</h5>";
    quizResults.innerHTML = resultText;
}

function selectFighter() {
    var quizForm = document.getElementById("quizForm");
    var quizResults = document.getElementById("quizResults");
    var fighterSelect = quizForm.elements["odp-quiz5"];
    var selectedFighter = fighterSelect.options[fighterSelect.selectedIndex].text;

    if (selectedFighter === "") {
        quizResults.innerHTML = "<h5>Proszę wybrać wojownika przed sprawdzeniem wyników.</h5>";
        return;
    }

    var fighterStats = {
        "hecker": { attack: randBetween(4, 14), defense: randBetween(2, 12), stamina: randBetween(7, 12) },
        "angry floppa": { attack: randBetween(11, 20), defense: randBetween(14, 30), stamina: randBetween(34, 60) },
        "oramge cat": { attack: randBetween(24, 35), defense: randBetween(1, 10), stamina: randBetween(23, 50) },
        "chomky cat": { attack: randBetween(50, 65), defense: randBetween(1, 10), stamina: randBetween(75, 101) },
        "sleepy cat": { attack: randBetween(1, 5), defense: randBetween(1, 5), stamina: randBetween(21, 45) }
    };

    var fighterStatsText = "<h5>Wybrany wojownik: " + selectedFighter + "<br><br>";
    fighterStatsText += "Attack: " + fighterStats[selectedFighter].attack + "<br>";
    fighterStatsText += "Defense: " + fighterStats[selectedFighter].defense + "<br>";
    fighterStatsText += "Stamina: " + fighterStats[selectedFighter].stamina + "</h5>";

    quizResults.innerHTML = fighterStatsText;
}

function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
