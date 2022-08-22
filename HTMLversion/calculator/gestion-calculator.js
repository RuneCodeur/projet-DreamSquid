let pokeTheme = document.getElementById('pokeTheme');
let rpgTheme = document.getElementById('rpgTheme');
let personaTheme = document.getElementById('personaTheme');
let chimeraTheme = document.getElementById('chimeraTheme');
let button = document.getElementById('random');

let pokeGen = document.getElementById('pokeGen');
let rpgGen = document.getElementById('rpgGen');
let personaGen = document.getElementById('personaGen');
let chimeraGen = document.getElementById('chimeraGen');

pokeChoice();
pokeTheme.onclick = pokeChoice;
rpgTheme.onclick = rpgChoice;
personaTheme.onclick = personaChoice;
chimeraTheme.onclick = chimeraChoice;

function pokeChoice (){
    pokeTheme.style.boxShadow = 'inset 5px 5px 10px black';
    rpgTheme.style.boxShadow = 'none';
    personaTheme.style.boxShadow = 'none';
    chimeraTheme.style.boxShadow = 'none';

    pokeGen.style.display = 'flex';
    rpgGen.style.display = 'none';
    personaGen.style.display = 'none';
    chimeraGen.style.display ='none';

    button.setAttribute('onclick','pokeCalcul()');
}
function rpgChoice(){
    pokeTheme.style.boxShadow = 'none';
    rpgTheme.style.boxShadow = 'inset 5px 5px 10px black';
    personaTheme.style.boxShadow = 'none';
    chimeraTheme.style.boxShadow = 'none';

    pokeGen.style.display = 'none';
    rpgGen.style.display = 'flex';
    personaGen.style.display = 'none';
    chimeraGen.style.display ='none';

    button.setAttribute('onclick','rpgCalcul()');
}
function personaChoice(){
    pokeTheme.style.boxShadow = 'none';
    rpgTheme.style.boxShadow = 'none';
    personaTheme.style.boxShadow = 'inset 5px 5px 10px black';
    chimeraTheme.style.boxShadow = 'none';

    pokeGen.style.display = 'none';
    rpgGen.style.display = 'none';
    personaGen.style.display = 'flex';
    chimeraGen.style.display ='none';
    
    button.setAttribute('onclick','personaCalcul()');
}
function chimeraChoice(){
    pokeTheme.style.boxShadow = 'none';
    rpgTheme.style.boxShadow = 'none';
    personaTheme.style.boxShadow = 'none';
    chimeraTheme.style.boxShadow = 'inset 5px 5px 10px black';

    pokeGen.style.display = 'none';
    rpgGen.style.display = 'none';
    personaGen.style.display = 'none';
    chimeraGen.style.display ='flex';
    
    button.setAttribute('onclick','chimeraCalcul()');
}