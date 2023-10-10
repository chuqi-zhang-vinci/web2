const formulaire = document.querySelector('form');
const souhait = document.querySelector("#souhait")
const message = document.querySelector('#message');
const button_affichage = document.querySelector('#button_affichage');

formulaire.addEventListener('submit', onSubmit);
formulaire.addEventListener('click', reaffichage());

function onSubmit (e) {
    e.preventDefault();
    formulaire.style.display = "none";
    message.innerText = `votre souhaît est : ${souhait.value}`; 
};

function reaffichage(e){
    e.preventDefault();
    message.innerText = "";
    button_affichage.style.display = "block";
    formulaire.style.display = "block";
};

