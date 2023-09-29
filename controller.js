let app = document.getElementById("app");
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