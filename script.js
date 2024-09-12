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

function printingBootReturn(mensagem) {

    let message

    if (mensagem === "oi" || mensagem === "olá" || mensagem === "ola" || mensagem === "bom dia" || mensagem === "boa tarde" || mensagem === "boa noite" || mensagem === "oie") {
        
        message = "Olá"

        setTimeout(() => {
            printingMessage("Como posso ajudar?", "boot", "Boot")
        }, 1000)

        setTimeout(() => {
            printingMessage("Temos relatórios diários, semanais e mensais.", "boot", "Boot")
        }, 2000)

        setTimeout(() => {
            printingMessage("Informe de qual período você deseja.", "boot", "Boot")
        }, 3000)
    } else {
        printingMessage("Não entendi, você pode repetir?", "boot", "Boot")

        return
    }

    if (mensagem.includes("diario") || mensagem.includes("dia") || mensagem.includes("diário")) {
        message = "Ok, vamos gerar o relatório diário em instantes, aguarde..."
    }

    if (mensagem.includes("semanal") || mensagem.includes("semana")) {
        message = "Ok, vamos gerar o relatório semanal em instantes, aguarde..."
    }

    if (mensagem.includes("mensal") || mensagem.includes("mês") || mensagem.includes("mes")) {
        message = "Ok, vamos gerar o relatório mensal em instantes, aguarde..."
    }

    printingMessage(message, "boot", "Boot")

    message = ""
}


menssagemInput.addEventListener("change", (e) => {

    let userMensagem = e.target.value.toLowerCase()

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        if (userMensagem !== "") {

            printingMessage(userMensagem, "user", "Usuário")

            menssagemInput.value = ""
        }

        setTimeout(() => {

            if (userMensagem !== "") {

                printingBootReturn(userMensagem)
            }

        }, 1000)

        setTimeout(() => {

          return userMensagem = ""

        }, 1500)

    })

})