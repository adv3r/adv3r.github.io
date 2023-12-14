const api_key = prompt('Insert your CatAPI key:');
if (api_key) {
    const catImageUrl = 'https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1';
    const catBreedsUrl = 'https://api.thecatapi.com/v1/breeds';

    let storedBreeds = [];
    let randomBreedsNames = [];
    let currentCatBreedName;
    let correctGuesses = 0;
    let highscoreCount = 0;

    const buttonsContainer = document.querySelector('.breeds-buttons');
    const pointsDisplay = document.querySelector('.points-display');
    const highscore = document.querySelector('.highscore');
    const catImgHld = document.querySelector('.cat-img');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayBreedsButtons() {
        buttonsContainer.innerHTML = '';

        let allBreeds = [...randomBreedsNames, currentCatBreedName];
        shuffleArray(allBreeds);

        for (const breedName of allBreeds) {
            const breedButton = document.createElement('button');
            breedButton.textContent = breedName;
            breedButton.addEventListener('click', checkGuess);
            buttonsContainer.appendChild(breedButton);
        }
    }

    function checkGuess(event) {
        const clickedButton = event.target;
        const guessedBreed = clickedButton.textContent;

        if (guessedBreed === currentCatBreedName) {
            correctGuesses++;
            alert(`Congrats! That's ${guessedBreed}. Your score is: ${correctGuesses}.`);
        } else {
            if (correctGuesses > highscoreCount) {
                highscoreCount = correctGuesses;
                highscore.innerHTML = `Highscore: ${highscoreCount}`;
            }
            correctGuesses = 0;
            alert(`Wrong guess! The correct breed is: ${currentCatBreedName}.`);
        }
        
        pointsDisplay.innerHTML = `Points: ${correctGuesses}`;
        fetchNewCatImage();
    }

    function fetchNewCatImage() {
        fetch(catImageUrl, {
            headers: {
                'x-api-key': api_key
            }
        })
            .then(response => response.json())
            .then((data) => {
                const currentCatBreedsInfo = data[0].breeds;
                currentCatBreedName = currentCatBreedsInfo[0].name;

                const catImgSrc = data[0].url;
                catImgHld.setAttribute('src', catImgSrc);

                shuffleArray(randomBreedsNames);
                displayBreedsButtons();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    fetch(catBreedsUrl, {
        headers: {
            'x-api-key': api_key
        }
    })
        .then(response => response.json())
        .then((data) => {
            shuffleArray(data);
            data = data.filter(img => img.image?.url != null)
            data = data.slice(0, 5);
            storedBreeds = data;

            for (const breed of storedBreeds) {
                if (!breed.image) continue;
                randomBreedsNames.push(breed.name);
            }

            shuffleArray(randomBreedsNames);
            fetchNewCatImage(); 
        })
        .catch((error) => {
            console.error(error);
        });
}
