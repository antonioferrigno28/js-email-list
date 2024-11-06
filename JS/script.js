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
const generatedEmailsList = document.getElementById("generated-emails-list");

let randomEmail;

function generateEmails() {
  for (let i = 0; i < 10; i++) {
    generatedEmailsContainer.innerHTML += "";
    generatedEmailsList.innerHTML = "";
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        randomEmail = data.response;
        generatedEmailsList.innerHTML += `<li class="text-success fw-bold"><a href="mailto:${randomEmail}">${randomEmail}</a></li>`;
        generatedEmailsContainer.innerHTML = `<h3 class="text-center my-3 text-danger fs-2">Email generate con successo!</h3>`;
        console.log(randomEmail);
      });
  }
}

generateEmails();

generateButton.addEventListener("click", generateEmails);
