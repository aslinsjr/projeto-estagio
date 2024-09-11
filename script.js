const chatDisplay = document.querySelector(".chat-display")

const menssagemInput = document.querySelector("#menssage-input")

const submitBtn = document.querySelector("#submit-btn")

menssagemInput.addEventListener("change", (e) => {

    let menssagem = e.target.value

    submitBtn.addEventListener("click", () => {

        chatDisplay.innerHTML = menssagem
        
    })
})