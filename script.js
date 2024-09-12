const chatDisplay = document.querySelector(".chat-display")

const menssagemInput = document.querySelector("#message-input")

const submitBtn = document.querySelector("#submit-btn")

function printingMessage(message, divClass, author) {
    const template = `<div class="${divClass} message">
    <p>${author}: ${message}</p>
    </div>`

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const messageDiv = htmlTemplate.querySelector(`.${divClass}`)
    chatDisplay.appendChild(messageDiv);
}

function printingUserMessage(mensagem) {

    printingMessage(mensagem, "user", "Usuário")

}

function printingBootReturn(mensagem) {

    let message

    if (mensagem) {
        message = "Olá"
    }

    printingMessage(message, "boot", "Boot")

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
            printingMessage("Como posso ajudar?", "boot", "Boot")
        }, 2000)


    })

})