

let back2school = false;
let randompokemon = '';
let textdiv = document.getElementById('textdiv')
textdiv = '';

const wildPokemonArray = [
  { name: "Charizard", health: 120, damage: 25, restorehp: 120, level: 1 },
  { name: "Squirtle", health: 95, damage: 19, restorehp: 95, level: 1 },
  { name: "Jigglypuff", health: 85, damage: 15, restorehp: 85, level: 1 },
  { name: "Mewtwo", health: 150, damage: 30, restorehp: 150, level: 1 },
  { name: "Gengar", health: 110, damage: 22, restorehp: 110, level: 1 },
  { name: "Snorlax", health: 160, damage: 28, restorehp: 160, level: 1 },
  { name: "Eevee", health: 80, damage: 17, restorehp: 80, level: 1 },
  { name: "Machamp", health: 130, damage: 26, restorehp: 130, level: 1 },
  { name: "Venusaur", health: 140, damage: 27, restorehp: 140, level: 1 },
  { name: "Alakazam", health: 110, damage: 23, restorehp: 110, level: 1 },
  { name: "Gyarados", health: 140, damage: 26, restorehp: 140, level: 1 },
  { name: "Dragonite", health: 160, damage: 29, restorehp: 160, level: 1 },
  { name: "Rattata", health: 70, damage: 14, restorehp: 70, level: 1 },
  { name: "Caterpie", health: 40, damage: 8, restorehp: 40, level: 1 },
  { name: "Pidgey", health: 50, damage: 10, restorehp: 50, level: 1 },
  { name: "Zigzagoon", health: 60, damage: 12, restorehp: 60, level: 1 },
];

const myPokemonArray = [
  { name: "Pikachu", health: 100, damage: 20, restorehp: 100, level: 1 },
  { name: "Bulbasaur", health: 90, damage: 18, restorehp: 90, level: 1 },

];

const teamRocketPokemonArray = [
  { name: "Blastoise", health: 130, damage: 28, restorehp: 130, level: 1 },
  { name: "Magikarp", health: 30, damage: 6, restorehp: 30, level: 1 },
  { name: "Bidoof", health: 65, damage: 13, restorehp: 65, level: 1 },
  { name: "Wurmple", health: 45, damage: 9, restorehp: 45, level: 1 },
  { name: "Seedot", health: 55, damage: 11, restorehp: 55, level: 1 },

];

let app = document.getElementById("app");
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
        
function firstPage(){
  let picturegame = document.getElementById('picturegame')
   picturegame.innerHTML = /*html*/`
            <div>Lets go on an adventure, click the Ash and Picachu picture:</div>
            <div id='startImg' onclick='start()' ><img src="img/ash.jpg" alt=""></div>
            `;
    
  }

// function clearTextDiv(){
//   document.getElementById('textdiv').innerHTML = '';
//   }
// const startImg = document.getElementById('startImg');
// startImg.addEventListener('click', clearTextDiv)

function start() {
   picturegame.innerHTML = /*html*/ `
        <div>Go to school:</div>
        <div onclick='school()' ><img src="img/school.jpg" alt=""></div>
        <div>or search for pokèmon</div>
        <div onclick='grass()'><img src="img/gress.jpg" alt=""></div>
        <button onclick='viewApp()'>Tilbake</button>
    `;
    
    
}
function school() {
  picturegame.innerHTML = /*html*/ `
        <div>Go to sleep and regenerate</div>
        <div onclick='goToSleep()'><img src="img/sleep.jpg" alt=""></div>
        <div>Fight team Rocket</div>
        <div onclick='fightTrainer()'><img src="img/teamrocket.jpg" alt=""></div>
        <div>Valg mellom kamp mot annen trener eller sove</div>
        <button onclick='start()'>Tilbake</button> 
        `;
}

function grass() {
  picturegame.innerHTML = /*html*/ `
        <div style='background-image: url(img/grassbackground.jpg)'>
            <div id='ashimagewrapper'><img id='ashimage' src="img/ash.jpg" alt=""></div>
            <div><img onclick='fightOrCatch()' id='rndimage' src='${randompokemon}' alt=""></div>
        </div>
        <button onclick='searchPokemonDelay()'>Search for pokemon</button>    
        <button onclick='start()'>Tilbake</button>    
        `;
}

function showMyPokemons(){
  let mypokemons  = '';
  for (let index = 0; index < myPokemonArray.length; index++){
  mypokemons += `<li>${myPokemonArray[index].name}</li>`
  }
  return mypokemons;
}

function goToSleep(){
  let mypokemons  = '';
  for (let index = 0; index < myPokemonArray.length; index++){
  myPokemonArray[index].hp = myPokemonArray[index].restorehp
  }
  textdiv = 'You awake feeling fully refreshed!'
  
  viewApp();
  
}

function fightOrCatch(){
  picturegame.innerHTML = /*html*/`
  <div>x</div>
  <div>x</div>
  `;
}

function togglepokedex(){
  document.getElementById('mypokemonlist').classList.toggle('pokedex');
}

function randomDelay(){
   const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
   return randomNumber
}
const randomNum = randomDelay()

function searchPokemonDelay(){
  randomDelay();
  setTimeout(searchPokemon, randomNum)
}

function searchPokemon(){
  randompokemon = ''
  document.getElementById('textdiv').textContent = ''
  randompokemon = ('img/missingno.png')
  document.getElementById('textdiv').textContent = 'A wild pokemon has appeared'
  grass();
}

function fightTrainer() {
  asd;
}


