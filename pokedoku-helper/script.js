async function searchPokemon() {
    let inputValue = document.getElementById("pokemonInput").value.toLowerCase();
    const response = await fetch('https://raw.githubusercontent.com/yukomone/pokedex/main/pokedex.json');
    const data = await response.json();
    const generations = ['kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'paldea', 'hisui'];
    const rarities = ['mythical', 'legendary'];

    if (generations.includes(inputValue)) {
        const matchingPokemon = data.filter(pokemon =>
            pokemon.region.toLowerCase() === inputValue
        );
        displayResults(matchingPokemon);
    } else if (rarities.includes(inputValue)) {
        const matchingPokemon = data.filter(pokemon =>
            pokemon.rarity && pokemon.rarity.toLowerCase() === inputValue
        );
        displayResults(matchingPokemon);
    } else {
        const matchingPokemon = data.filter(pokemon =>
            pokemon.types.some(type => type.toLowerCase().includes(inputValue))
        );
        displayResults(matchingPokemon);
    }
}

function displayResults(pokemonList) {
    const resultContainer = document.querySelector(".result");
    resultContainer.innerHTML = "";

    if (pokemonList.length === 0) {
        resultContainer.innerHTML = "No matching Pokemon found.";
        return;
    }

    pokemonList.forEach(pokemon => {
        const imageElement = document.createElement("img");
        imageElement.classList.add("pokemon-img");
        imageElement.src = pokemon.artwork;

        const nameElementHld = document.createElement("div");
        nameElementHld.classList.add("pokemon-name-hld");

        let pokemonName = pokemon.name.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).replace(/[a-zA-Z]/g, '*');
        }).join(' ');

        const nameElementText = document.createElement("span");
        nameElementText.classList.add("pokemon-name-text");
        nameElementText.textContent = pokemonName;

        nameElementHld.append(nameElementText);

        const pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon-hld");
        pokemonDiv.setAttribute("onclick", "toggleNameView(this)");

        pokemonDiv.appendChild(imageElement);
        pokemonDiv.appendChild(nameElementHld);

        resultContainer.appendChild(pokemonDiv);
    });
}

function toggleNameView(element) {
    const clickedNameElement = element.querySelector(".pokemon-name-hld");
    const isActive = clickedNameElement.classList.contains("is-active");

    const allNameElements = document.querySelectorAll(".pokemon-name-hld");
    allNameElements.forEach(nameElement => {
        nameElement.classList.remove("is-active");
    });

    if (!isActive) {
        clickedNameElement.classList.add("is-active");
    }
}

function showInfo(element) {
    const disclaimerElement = document.querySelector(".disclaimer-text-hld");

    const isActive = disclaimerElement.classList.contains("is-active");

    disclaimerElement.classList.remove("is-active");

    if (!isActive) {
        disclaimerElement.classList.add("is-active");
        element.textContent = '(click to hide info)';
    } else {
        element.textContent = '(click for more info)';
    }
}

