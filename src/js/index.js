const buttonChangeTheme = document.getElementById("buttonOtherTheme");

const body = document.querySelector("body");

const imageButtonOthertheme = document.querySelector(".buttonImage");

buttonChangeTheme.addEventListener("click", () => {
    
    const darkModeOn = body.classList.contains("darkMode");

    body.classList.toggle("darkMode");
    
    if(darkModeOn) {

        imageButtonOthertheme.setAttribute("src", "./src/imagens/sun.png");
    
       }else{

        imageButtonOthertheme.setAttribute("src", "./src/imagens/moon.png");

       }

    });
