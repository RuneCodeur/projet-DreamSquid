let descriPersona = document.getElementById('descriPersona');
let nameM =['John', 'Etienne', 'José', 'Sebastien', 'Fred', 'Fredéric', 'Alfred', 'Bertrand', 'Charles', 'Damien', 'François'];
let nameF=['Alice', 'Béatrice', 'Caroline', 'Delphine', 'Elise'];
let numberclick = 0;

function personaCalcul(){

    if (numberclick === 0){
        descriPersona.innerText = "j'ai dit : c'est pas dispo.";
        numberclick ++;
    }else if(numberclick === 1){
        descriPersona.innerText = "hoooo ! C'est pas encore prêt !";
        numberclick ++;
    }else if(numberclick === 2){
        descriPersona.innerText = "Nan mais tu sais lire, oui ?! c'est pas prêt !!!";
        numberclick ++;
    }else if(numberclick === 3){
        descriPersona.innerText = "c'est pas en cliquant frénétiquement sur le bouton que le générateur va marcher comme par magie !";
        numberclick ++;
    }else if(numberclick === 4){
        descriPersona.innerText = "arrete de cliquer !!!!!!!";
        numberclick ++;
    }else if(numberclick === 5){
        descriPersona.innerText = "ARRETEEEEUUUU !!!!!!";
        numberclick ++;
    }else if(numberclick === 6){
        descriPersona.innerText = "tu sais que si tu clique trop sur ce bouton, tu va peter ton ordi ?";
        numberclick ++;
    }else if(numberclick === 7){
        descriPersona.innerText = "c'est pareil si tu es sur téléphone...";
        numberclick ++;
    }else if(numberclick === 8){
        descriPersona.innerText = "...";
        numberclick ++;
    }else if(numberclick === 9){
        descriPersona.innerText = "t'aime bien prendre des risques, toi ";
        numberclick ++;
    }else if(numberclick === 10){
        descriPersona.innerText = ".";
        numberclick ++;
    }else if(numberclick === 11){
        descriPersona.innerText = "..";
        numberclick ++;
    }else if(numberclick === 12){
        descriPersona.innerText = "...";
        numberclick ++;
    }else if(numberclick === 13){
        descriPersona.innerText = "non, le générateur n'est toujours pas prêt...";
        numberclick ++;
    }else if(numberclick === 14){
        descriPersona.innerText = "ERROR#HACK0012-allThings*'#C/User', action=DELETE, replace=prg475rt6.exe";
        numberclick ++;
    }else if(numberclick === 15){
        descriPersona.innerText = "ERROR";
        numberclick ++;
    }else if(numberclick === 16){
        descriPersona.innerText = "lol t'a vraiment cru que t'avait choppé un virus hein ? XD";
        numberclick ++;
    }else if(numberclick === 17){
        descriPersona.innerText = "en fait, y a jamais eu de virus...";
        numberclick ++;
    }else if(numberclick === 18){
        descriPersona.innerText = "... tout comme de générateur.";
        numberclick ++;
    }else if(numberclick === 19){
        descriPersona.innerText = "en fait, à chaque fois que tu clique sur le bouton, j'ecrit un texte aléatoire très très rapidement et je te donne.";
        numberclick ++;
    }else if(numberclick >= 20){
        descriPersona.innerText = "...";
        numberclick ++;
    }
}