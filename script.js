const chatDisplay = document.querySelector(".chat-display")

const menssagemInput = document.querySelector("#message-input")

const submitBtn = document.querySelector("#submit-btn")

function printingUserMessage(mensagem) {
    const template = `<div class="user message">
        <p>Usuário: ${mensagem}</p>
        </div>`

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const userMessage = htmlTemplate.querySelector(".user")
    chatDisplay.appendChild(userMessage);
}

function printingBootReturn(mensagem) {

    let bootMessage

    if (mensagem || mensagem === "olá") {
        bootMessage = "Olá"
    }

    const template = `<div class="boot message">
        <p>Boot: ${bootMessage}</p>
        </div>`

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const bootMessageDiv = htmlTemplate.querySelector(".boot")
    chatDisplay.appendChild(bootMessageDiv);
}

function printingBootMessage() {

    const template = `<div class="boot message">
        <p>Boot: Como posso ajudar?</p>
        </div>`

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const bootMessageDiv = htmlTemplate.querySelector(".boot")
    chatDisplay.appendChild(bootMessageDiv);
}




menssagemInput.addEventListener("change", (e) => {

    let userMensagem = e.target.value.toLowerCase()

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        if (userMensagem !== "") {

            printingUserMessage(userMensagem)

            menssagemInput.value = ""
        }

        setTimeout(() => {
            printingBootReturn(userMensagem)
        }, 1000)

        setTimeout(() => {
            printingBootMessage()
        }, 2000)


    })

})