const message = document.querySelector('#message');
const counter = document.querySelector('#counter');

window.addEventListener("click", startToCount);

let cpt = 0;
function startToCount() {
    cpt += 1;
    counter.innerText = cpt;
    if(cpt >= 5 && cpt <= 9){
        message.innerText = 'Bravo, bel échauffement !';
    }
    if(cpt === 10)
        message.innerText = "Vous êtes passé maître en l'art du clic !";
    if(cpt === 30)
        message.innerText = "Ca suffit !";
    if(cpt === 40)
        message.innerText = "dans 10 cliques je réinitialise tout !";
    if(cpt === 50){
        cpt = 0;
        message.innerText = "";
    }
}