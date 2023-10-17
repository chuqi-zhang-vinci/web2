const btn = document.querySelector("#btn");
const message = document.querySelector("#message");

btn.addEventListener("mouseover", startToCount);
btn.addEventListener("click", nbClick);

let startTime;
let timeoutId;
let cpt = 0;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;

function startToCount() {
    startTime = new Date();
    message.innerText = "commencer le compteur"
    timeoutId = setTimeout(() => {
        fail();
     }, delayInMiliSeconds);
}

function nbClick() {
    const timeSpent = new Date().getTime() - startTime.getTime();
    cpt++;
    if(cpt === 10){
        clearTimeout(timeoutId);
        message.innerText = `You win ! You clicked 10 times within ${timeSpent / 1000} s`;
    }
}

function fail() {
    message.innerText = "Game over, you did not click 10 times within 5s !";
}