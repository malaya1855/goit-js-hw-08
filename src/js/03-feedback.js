
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")
const inputEmail = document.querySelector("[name = 'email']")
const inputMessage = document.querySelector("[name = 'message']")


form.addEventListener ('input',  throttle (onInputForm, 500))

function onInputForm (event) {
    event.preventDefault();
    const elements = {
        email: inputEmail.value,
        message: inputMessage.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(elements))
    
}

const savedMessage = localStorage.getItem('feedback-form-state')
const filledMessage = JSON.parse(savedMessage)
    if (savedMessage){
        inputEmail.value = filledMessage.email;
        inputMessage.value = filledMessage.message;
    }

form.addEventListener ('submit', onSubmitForm)

function onSubmitForm (event) {
    event.preventDefault();
    console.log(filledMessage);
    localStorage.removeItem('feedback-form-state')
    form.reset();
}