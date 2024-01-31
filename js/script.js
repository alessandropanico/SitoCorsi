function chiSiamo(){
    window.location.href="./pagine/chisiamo.html"
}

function Corsi(){
    window.location.href="corsi.html";
}

function Contatti(){
    window.location.href="contatti.html";
}

function Accedi(){
    window.location.href="accedi.html";
}

function Registrati(){
    window.location.href="registrati.html";
}



//------------------------------------------

function toggleImage(show, imageNumber) {
    let imageContainer = document.getElementById('image' + imageNumber);
    if (imageContainer) {
        if (show) {
            // Se show è true, imposta l'opacità a 1 per far apparire l'immagine
            imageContainer.style.opacity = 1;
        } else {
            // Se show è false, imposta l'opacità a 0 per far scomparire l'immagine
            imageContainer.style.opacity = 0;
        }
    }
}