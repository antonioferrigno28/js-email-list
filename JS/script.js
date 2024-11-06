// Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const generateButton = document.getElementById("button");
const generatedEmailsContainer = document.getElementById(
  "generated-emails-container"
);
let randomEmail;

function generateEmails() {
  for (let i = 0; i < 10; i++) {
    console.clear();
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        randomEmail = data.response;
        console.log(randomEmail);
      });
  }
}

generateEmails();

generateButton.addEventListener("click", generateEmails);
