viewApp();
function viewApp() {
  app.innerHTML = /*html*/ `
        <div id='pokemongame'>
          <div id='picturegame'></div>
          <div id='showpokedex'>
            <button onclick='togglepokedex()'>Pokedex</button>
            <div class='pokedex' id='mypokemonlist'>${showMyPokemons()}</div>
          </div>
          <div id='textdiv'>${textdiv}</div>    
        </div>
        
        `;
  firstPage();
}

function firstPage() {

  let picturegame = document.getElementById("picturegame");
  picturegame.innerHTML = /*html*/ `
                  <div>Lets go on an adventure, click the Ash and Picachu picture:</div>
                  <div id='startImg' onclick='start()' ><img src="img/ash.jpg" alt=""></div>
                  `;
}

function start() {
  picturegame.innerHTML = /*html*/ `
                 <div>Go to school:</div>
                 <div onclick='school()' ><img src="img/school.jpg" alt=""></div>
                 <div>or search for pokèmon</div>
                 <div onclick='grass()'><img src="img/gress.jpg" alt=""></div>
                 <button onclick='viewApp()'>⯇</button>
             `;
}

function school() {
  picturegame.innerHTML = /*html*/ `
                  <div>Go to sleep and regenerate</div>
                  <div onclick='goToSleep()'><img src="img/sleep.jpg" alt=""></div>
                  <div>Fight team Rocket</div>
                  <div onclick='fightTrainer()'><img src="img/teamrocket.jpg" alt=""></div>
                  <div></div>
                  <button onclick='start()'>⯇</button> 
                  `;
}

function grass() {
  picturegame.innerHTML = /*html*/ `
                  <div style='background-image: url(img/grassbackground.jpg)'>
                      <div id='ashimagewrapper'><img id='ashimage' src="img/ash.jpg" alt=""></div>
                      <div><img onclick='fightOrCatch()' id='rndimage' src='${randompokemon}' alt=""></div>
                  </div>
                  <button onclick='start()'>⯇</button>    
                  <button onclick='searchPokemon()'>Search for pokemon</button>    
                  `;
}

function fightOrCatch() {
  const selectedPokemon = appearingPokemon();
  picturegame.innerHTML = /*html*/ `
    <button>Fight</button>
    <button onclick='addToMyArray()'>Catch</button>
    <br>
    <div onclick='selectAppearingPokemon(this)'>${selectedPokemon.name}</div>
    <div>Click the pokemon to select it</div>
    <div id='showselectedpokemon'></div>
    <br>
    <button onclick='firstPage()'>⯇</button>
    `;
    document.getElementById("textdiv").textContent =
    "It was " + selectedPokemon.name
}
function showMyPokemons() {
  let mypokemons = "";
  for (let index = 0; index < myPokemonArray.length; index++) {
    mypokemons += `<li>${myPokemonArray[index].name}</li>`;
  }
  return mypokemons;
}