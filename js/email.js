document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("aziendaForm");
    const inviaButton = document.getElementById("inviaButtonEM");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        console.log("Submit button clicked");

        const nomePersona = document.getElementById("nomePersona").value;
        const cognomePersona = document.getElementById("cognomePersona").value;
        const emailPersona = document.getElementById("emailPersona").value;
        const cellularePersona = document.getElementById("cellularePersona").value;
        const messaggio = document.getElementById("messaggio").value;

        console.log("Dati registrati:");
        console.log("Nome:", nomePersona);
        console.log("Cognome:", cognomePersona);
        console.log("Email:", emailPersona)
        console.log("Cellulare:", cellularePersona);
        console.log("Messaggio:", messaggio);

        const emailData = {
            service_id: 'ServizioMio',
            template_id: 'Template2',
            user_id: 'DYAuk3nJ1S4O-Y948',
            template_params: {
                nomePersona,
                cognomePersona,
                emailPersona,
                cellularePersona,
                messaggio,
            },
        };

        try {
            await emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params, emailData.user_id);
            const aziendaMessage = document.getElementById("aziendaMessage");
            aziendaMessage.textContent = "Informazioni inviate con successo!";
        } catch (error) {
            console.error("Errore nell'invio dell'email:", error);
        }
    });

    inviaButton.addEventListener("click", function(event) {
        event.preventDefault();
        form.dispatchEvent(new Event("submit"));
    });
});
