

function goToSleep() {
  let mypokemons = "";
  for (let index = 0; index < myPokemonArray.length; index++) {
    myPokemonArray[index].hp = myPokemonArray[index].restorehp;
  }
  textdiv = "You awake feeling fully refreshed!";
  viewApp();
}



function togglepokedex() {
  document.getElementById("mypokemonlist").classList.toggle("pokedex");
}

function randomDelay() {
  const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  return randomNumber;
}
const randomNum = randomDelay();

function searchPokemonDelay() {
  randomDelay();
  setTimeout(searchPokemon, randomNum);
}

function searchPokemon() {
  randompokemon = "";
  document.getElementById("textdiv").textContent = "";
  randompokemon = "img/missingno.png";
  document.getElementById("textdiv").textContent =
    "A wild pokemon has appeared";
  grass();
}

function fightWildPokemon() {
  
}

function catchWildPokemon(){

}

function appearingPokemon(){
  let appearingpokemon = '';
  if(wildPokemonArray.length > 0){
    const randomIndex = Math.floor(Math.random() * wildPokemonArray.length);
    appearingpokemon = wildPokemonArray[randomIndex]
  } else {
    appearingpokemon = 'You catched them all!'
  }
  return appearingpokemon;
}

function selectAppearingPokemon(clickedelement){
  const selectedPokemon = clickedelement.innerText
  document.getElementById('showselectedpokemon').innerText = selectedPokemon
}

function addToMyArray(){
  const showSelectedPokemonDiv = document.getElementById('showselectedpokemon')
  const selectedPokemonName = showSelectedPokemonDiv.textContent;
  const alreadyExists = myPokemonArray.some(pokemon => pokemon.name === selectedPokemonName)
  if (alreadyExists) {
    document.getElementById("textdiv").textContent ="I already got this one!"
  } else {
  const thisPokemon = wildPokemonArray.find(pokemon => pokemon.name === selectedPokemonName)
  myPokemonArray.push(thisPokemon)
  }
}

//FRA MARIO, HVordan velge pokemon.
// function selectChar(clickedelement) {
//   let charactername = clickedelement.getAttribute('alt');
//   selectedCharacter = characters.find((obj) => obj.charimg === charactername);
//   showselectedchar.innerHTML = `<img src="${selectedCharacter.charimg}" alt=""></img>`

// }