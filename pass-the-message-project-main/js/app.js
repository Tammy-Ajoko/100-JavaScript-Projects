
const submit = document.querySelector("#submitBtn")
const messageOuput = document.querySelector(".message-content")
const messageInput = document.querySelector("#message")
const feedback = document.querySelector('.feedback')

submit.addEventListener("click",function(e){
    e.preventDefault()
    let temp = messageInput.value
    messageInput.value = ""
    if (temp === ''){
        feedback.style.display = "block"
        setTimeout(function(){
            feedback.style.display = "none"
        }, 2000)
    }
    else{
        messageOuput.textContent = temp

    }

})




