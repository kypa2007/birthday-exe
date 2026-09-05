// -------------------------
// MENSAJES INICIALES
// -------------------------
console.log("El script se cargó correctamente");

const messages = [
    "> Initializing The protocol...",
    "> Searching for the subject...",
    "> User detected.",
    "> Checking system status...",
    "> Everything appears to be working.",
    "> Preparing something special..."
];


// Elementos HTML que vamos a utilizar

const messagesContainer =
    document.getElementById("messages");

const progress =
    document.getElementById("progress");

const percentage =
    document.getElementById("percentage");

const finalMessage =
    document.getElementById("final-message");

const secretMessage =
    document.getElementById("secret-message");

const continueButton =
    document.getElementById("continue-button");




let messageIndex = 0;


function showNextMessage() {

    if (messageIndex >= messages.length) {

        startProgress();

        return;
    }


    const paragraph = document.createElement("p");

    paragraph.textContent =
        messages[messageIndex];

    messagesContainer.appendChild(paragraph);


    messageIndex++;


    setTimeout(showNextMessage, 800);
}




function startProgress() {

    let progressValue = 0;


    const interval = setInterval(() => {

        progressValue++;

        progress.style.width =
            progressValue + "%";

        percentage.textContent =
            progressValue + "%";


        if (progressValue >= 100) {

            clearInterval(interval);

            showFinalMessage();

        }

    }, 35);
}




function showFinalMessage() {

    finalMessage.classList.remove("hidden");

}



continueButton.addEventListener("click", () => {

    finalMessage.classList.add("hidden");

    secretMessage.classList.remove("hidden");

});
    



showNextMessage();

