function accedi() {
    // Recupera le credenziali inserite dall'utente
    const emailInserita = document.getElementById("email").value;
    const passwordInserita = document.getElementById("password").value;

    // Recupera gli utenti registrati dal localStorage
    const utentiRegistrati = JSON.parse(localStorage.getItem("utentiRegistrati")) || [];
    console.log("Utenti registrati:", utentiRegistrati);


    // Cerca l'utente con le credenziali corrispondenti
    const utenteCorrispondente = utentiRegistrati.find(utente => utente.email === emailInserita && utente.password === passwordInserita);

    console.log("Utente corrispondente:", utenteCorrispondente);

    // Verifica se l'utente è stato trovato
    if (utenteCorrispondente) {
        // Utente trovato, esegui l'accesso
        alert("Accesso effettuato con successo!");
    } else {
        // Utente non trovato, mostra un messaggio di errore
        alert("Credenziali non valide. Riprova.");
    }
}
