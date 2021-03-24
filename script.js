// Sélectionner nos éléments

let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Cacher l'erreur

error.style.display = "none";

// Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() *  1001);

// Utilisateur qui fait une proposition

let coups = 0;

// Variable qui stocke le nombre choisi par l'utilisateur

let nombreChoisi;

// Fonction vérifier

function verifier(nombre) {

    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire) {

        instruction.textContent = "#" + coups + " ( " + nombre +  " ) " + "C'est plus ! 😓";
        instruction.className = 'instruction plus';


    } else if (nombre > nombreAleatoire) {

        instruction.textContent = "#" + coups + " ( " + nombre +  " ) " + "C'est moins ! 😋";
        instruction.className = 'instruction moins';

    } else {

        instruction.textContent = "#" + coups + " ( " + nombre +  " ) " + 
        "Félicitation vous avez trouvé le juste prix ! 😍";
        instruction.className = 'instruction fini';

    }

    document.querySelector('#instructions').prepend(instruction);

}

// Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {

    if(isNaN(input.value)) {

        error.style.display = "inline";

    } else {

        error.style.display = "none";

    }

});

// L'envoi du formulaire

formulaire.addEventListener('submit', (e) => {

    e.preventDefault();

    if(isNaN(input.value) || input.value == "") {

        input.style.borderColor = "red";

    } else {

        coups ++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }


});
