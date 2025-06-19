const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//Array Number1:an array of pokémon objects where the id is evenly divisible by 3
const divisId = pokemon.filter( p => p.id%3===0 );
console.log(divisId);
//Array Number2:an array of pokémon objects that are "fire" type
const fireType = pokemon.filter( p => p.types[0]==="fire" );
console.log(fireType);
//Array Number3:an array of pokémon objects that have more than one type
const moreThanType = pokemon.filter( p => p.types.length>1);
console.log(moreThanType);
//Array Number4:an array with just the names of the pokémon
const ArrNames = pokemon.map( p => p.name);
console.log(ArrNames);
// Array Number 5:an array with just the names of pokémon with an id greater than 99
const idMorethan99 = pokemon.filter( p =>p.id>99).map(p=>p.name);
console.log(idMorethan99);
// Array Number 6:an array with just the names of the pokémon whose only type is poison
const poisonType = pokemon.filter(p=>p.types[0]==="poison").map(p=>p.name);
console.log(poisonType);
// Array Number 7:an array containing just the first type of all the pokémon whose second type is "flying"
const typeflying = pokemon.filter(p=>p.types[1]==="flying").map(p=>p.types[0]);
console.log(typeflying);
// Array Number 8:a count of the number of pokémon that are "normal" type
const countNumb = pokemon.filter(p=>p.types[0]==="normal").length;
console.log(countNumb);
// Array Number9:an array with all pokemon except the pokemon with the id of 148
const exptation=pokemon.slice(0,-1)
console.log(exptation);
//Array Number10:an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const updated = pokemon.map(p => p.id === 35 ? { ...p, types: ["fairy"] }:p);
console.log(updated);
