async function searchPokemon() {
    const inputValue = document.getElementById("pokemonInput").value.toLowerCase();
    const response = await fetch('https://raw.githubusercontent.com/anhthang/raycast-pokedex/main/src/statics/pokedex.json');
    const data = await response.json();
    const generations = ['Generation I', 'Generation II', 'Generation III', 'Generation IV', 'Generation V', 'Generation VI', 'Generation VII', 'Generation VIII', 'Generation IX'];

    const generationMapping = {
        'kanto': 'Generation I',
        'johto': 'Generation II',
        'hoenn': 'Generation III',
        'sinnoh': 'Generation IV',
        'unova': 'Generation V',
        'kalos': 'Generation VI',
        'alola': 'Generation VII',
        'galar': 'Generation VIII',
        'paldea': 'Generation IX',
    };

    const targetGeneration = generationMapping[inputValue] || inputValue;

    const matchingPokemon = data.filter(pokemon =>
        (!generations.includes(targetGeneration) && pokemon.types.some(type => type.toLowerCase().includes(targetGeneration))) ||
        (generations.includes(targetGeneration) && pokemon.generation.includes(targetGeneration))
    );

    displayResults(matchingPokemon);
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

        const nameElementText = document.createElement("span");
        nameElementText.classList.add("pokemon-name-text");
        nameElementText.textContent = pokemon.name;

        const nameElementText2 = document.createElement("span");
        nameElementText2.classList.add("pokemon-name-text2");
        nameElementText2.textContent = pokemon.name;

        nameElementHld.append(nameElementText, nameElementText2);

        const pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon-hld");
        pokemonDiv.setAttribute("onclick", "toggleNameView(this)");

        pokemonDiv.appendChild(imageElement);
        pokemonDiv.appendChild(nameElementHld);

        resultContainer.appendChild(pokemonDiv);
    });
}

function toggleNameView(element) {
    const allNameElements = document.querySelectorAll(".pokemon-name-hld");
    allNameElements.forEach(nameElement => {
        nameElement.classList.remove("is-active");
    });

    const clickedNameElement = element.querySelector(".pokemon-name-hld");
    clickedNameElement.classList.toggle("is-active");
}
