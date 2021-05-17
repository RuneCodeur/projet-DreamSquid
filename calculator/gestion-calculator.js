let pokeTheme = document.getElementById('pokeTheme');
let rpgTheme = document.getElementById('rpgTheme');
let button = document.getElementById('random');

let pokeGen = document.getElementById('pokeGen');
let rpgGen = document.getElementById('rpgGen');

pokeChoice();
pokeTheme.onclick = pokeChoice;
rpgTheme.onclick = rpgChoice;

function pokeChoice (){
    pokeTheme.style.boxShadow = 'inset 5px 5px 10px black'
    rpgTheme.style.boxShadow = 'none';
    pokeGen.style.display = 'flex';
    rpgGen.style.display = 'none';
    button.setAttribute('onclick','pokeCalcul()')
}
function rpgChoice(){
    pokeTheme.style.boxShadow = 'none';
    rpgTheme.style.boxShadow = 'inset 5px 5px 10px black';
    pokeGen.style.display = 'none';
    rpgGen.style.display = 'flex';
    button.setAttribute('onclick','rpgCalcul()')
}