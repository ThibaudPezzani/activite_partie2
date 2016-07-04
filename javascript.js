var blocFormulaire = document.getElementById("bloc_formulaire");
blocFormulaire.style.display = "none";

var lienFormulaire = document.getElementById("lien_formulaire");
lienFormulaire.addEventListener("click", function () {
    // On fait apparaître le pop up
    blocFormulaire.style.display = "block";
});

var fermerPop = document.getElementById("fermer_btn");
fermerPop.addEventListener("click", function () {
    // On ferme le pop up
    blocFormulaire.style.display = "none";
});

var contenu = document.getElementById("contenu");

var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    //Récupération de la saisie
    function recupDonnees(form) {
        var recupNom = document.createElement("p");
        recupNom.appendChild(document.createTextNode("Nom : " + form.elements.nom.value));

        var recupObjet = document.createElement("p");
        recupObjet.appendChild(document.createTextNode("Objet : " + form.elements.objet.value));
        
        var recupMail = document.createElement("p");
        recupMail.appendChild(document.createTextNode("Mail : " + form.elements.mail.value));
        
        var recupMessage = document.createElement("p");
        recupMessage.appendChild(document.createTextNode("Message : " + form.elements.message.value));
        
        var divRecup = document.createElement("div");
        divRecup.classList.add("recuperation_donnees");
        divRecup.appendChild(recupNom);
        divRecup.appendChild(recupObjet);
        divRecup.appendChild(recupMail);
        divRecup.appendChild(recupMessage);

        return divRecup;
    }
    
    // Insertion des données dans la page
    var donnees = recupDonnees(form);
    contenu.replaceChild(donnees, contenu.firstChild);
    
    // Message de remerciement d'envoi
    var messageEnvoi = document.getElementById("remerciement");
    messageEnvoi.style.display = "block";
    messageEnvoi.style.marginTop = "15px";
    messageEnvoi.style.padding = "15px";
    messageEnvoi.style.color = "#333333";
    messageEnvoi.style.backgroundColor = "#f1fff0";
    messageEnvoi.style.fontStyle = "italic";
    messageEnvoi.textContent = 'Votre message a bien été envoyé.';
    lienFormulaire.style.display = "block";
    blocFormulaire.style.display = "none";

    // Disparition du message de remerciement au bout de 2 secondes
    setTimeout(function () {
        messageEnvoi.style.display = "none";
    }, 3000);
});