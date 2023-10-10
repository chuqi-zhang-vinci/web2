const colors = document.querySelectorAll('.color-div');

let cpt = 0;
colors.forEach((elem) => {
    elem.addEventListener("click", () => {
       cpt += 1;
       elem.style.width = "80px";
       elem.style.height = "80px";
       elem.innerText = elem.style.backgroundColor;

       if(cpt == 2){
            elem.style.width = "50px";
            elem.style.height = "50px";
            elem.innerText = "";
       }
    });
});

