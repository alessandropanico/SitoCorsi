// Carica gli utenti registrati dal localStorage all'avvio
const utentiRegistrati = JSON.parse(localStorage.getItem("utentiRegistrati")) || [];

function registraUtente() {
    // Recupera i valori dai campi del modulo
    const nome = document.getElementById("nome").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    console.log("Dati registrati:")
    console.log("Nome: ", nome);
    console.log("Password: ", password);
    console.log("Email: ", email);

    // Controlla se esiste già un utente con la stessa email
    const utenteEsistente = utentiRegistrati.find(utente => utente.email === email);

    if (utenteEsistente) {
        alert("Esiste già un utente con la stessa email. Scegli un'altra email.");
    } else {
        // Registra l'utente
        const nuovoUtente = {
            nome: nome,
            password: password,
            email: email,
        };

        // Aggiungi l'utente all'array e aggiorna il localStorage
        utentiRegistrati.push(nuovoUtente);
        localStorage.setItem("utentiRegistrati", JSON.stringify(utentiRegistrati));

        // Puoi anche reindirizzare l'utente a una pagina di successo o fare altre azioni dopo la registrazione
        alert("Registrazione avvenuta con successo!");
        const messaggioSuccesso = document.getElementById("messaggioSuccesso");
        messaggioSuccesso.textContent = "Informazioni inviate con successo!";
    }
}
