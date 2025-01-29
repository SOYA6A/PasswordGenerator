// Sélectionne l'élément d'entrée où l'utilisateur saisit le mot de passe dans la boîte de mot de passe  
const passwordInput = document.querySelector(".password-box input"),
// Sélectionne l'icône de copie dans la boîte de mot de passe (probablement pour copier le mot de passe)
copyIcon = document.querySelector(".password-box .copy-icon"),
// Sélectionne l'élément d'entrée de la barre de plage (probablement pour définir la longueur du mot de passe)
rangeInput = document.querySelector(".range-box input"),
// Sélectionne l'élément qui affiche le nombre associé au curseur de la barre de plage
sliderNumber = document.querySelector(".range-box .slider-number"),
// Sélectionne le bouton qui sera utilisé pour générer un nouveau mot de passe  
generateButton = document.querySelector(".generate-button");

let allCharacters = "abcdefghijklmnopanstuvwxyZABCDEFGHIJKLMNOPORSTUWXYZ0123456789↑！$%&｜［］（）｛｝：；・*＋-#@＜>";

const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
      let randomNumbers = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[randomNumbers];
     
    } 
   passwordInput.value = newPassword;
   copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
};

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy","uil-file-check-alt");
});

generateButton.addEventListener("click", generatePassword);


