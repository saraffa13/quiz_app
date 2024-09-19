const pokemonList = [];

const fetchImages = document.getElementById("fetch");
const pokemon_container = document.getElementById("pokemon_container");

fetchImages.addEventListener(
    "click",
    async function fetchPokemonData() {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
            );
            const parsedResponse = await response.json();
            console.log(parsedResponse);

            const pokemonDetails = await Promise.all(
                parsedResponse.results.map(async (pokemon) => {
                    const detailResponse = await fetch(pokemon.url);
                    return await detailResponse.json();
                })
            );

            
            const rectifiedDetails = pokemonDetails.map((pokemonData)=>{
                console.log(pokemonData);
                return {
                    "name":pokemonData.name,
                    "imageUrl":pokemonData.sprites.front_default,
                    "type":pokemonData.types[0].type.name
                }
            })
            console.log(rectifiedDetails);
            pokemonList.push(...rectifiedDetails);
            displayPokemon();
        } catch (err) {
            console.error(err);
        }
    }
);
function createPokemonCard(name, imageUrl, type, abilities) {
    const container = document.createElement('div');
    container.className = "card-container group perspective";

    const card = document.createElement('div');
    card.className = "pokemon-card relative w-48 h-60 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180";

    const cardFront = document.createElement('div');
    cardFront.className = "card-front absolute w-full h-full bg-white border border-gray-300 rounded-lg shadow-lg backface-hidden flex flex-col items-center justify-between";

    const img = document.createElement('img');
    img.className = "pokemon-image w-4/5 h-4/5 mt-2 object-contain";
    img.src = imageUrl;
    img.alt = name;

    const nameDiv = document.createElement('div');
    nameDiv.className = "pokemon-name w-full text-center bg-gray-800 text-white py-2 font-semibold";
    nameDiv.textContent = name;

    cardFront.appendChild(img);
    cardFront.appendChild(nameDiv);

    const cardBack = document.createElement('div');
    cardBack.className = "card-back absolute w-full h-full bg-gray-100 border border-gray-300 rounded-lg shadow-lg backface-hidden transform rotate-y-180 flex flex-col items-center justify-center";

    const backContent = document.createElement('div');
    backContent.className = "back-content text-center text-gray-800";

    const title = document.createElement('h2');
    title.className = "text-lg font-bold mb-2";
    title.textContent = name;

    const typePara = document.createElement('p');
    typePara.className = "text-sm";
    typePara.textContent = `Type: ${type}`;

    const abilitiesPara = document.createElement('p');
    abilitiesPara.className = "text-sm";
    abilitiesPara.textContent = `Abilities: ${abilities}`;

    backContent.appendChild(title);
    backContent.appendChild(typePara);
    backContent.appendChild(abilitiesPara);

    cardBack.appendChild(backContent);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    container.appendChild(card);

    return container;
}

function displayPokemon() {
    pokemonList.forEach((pokemonData) => {
        pokemon_container.append(createPokemonCard(pokemonData.name, pokemonData.imageUrl,"x","y"));
    })
}



