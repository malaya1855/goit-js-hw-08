
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")
const inputEmail = document.querySelector("[name = 'email']")
const inputMessage = document.querySelector("[name = 'message']")

form.addEventListener ('input',  throttle (onInputForm, 500))

savedInputFields()

function onInputForm (event) {
    event.preventDefault();
    const elements = {
        email: inputEmail.value,
        message: inputMessage.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(elements))
}
 function savedInputFields () {
    const savedMessage = localStorage.getItem('feedback-form-state') || "";
    if (savedMessage) {
        const filledMessage = JSON.parse(savedMessage);
        inputEmail.value = filledMessage.email;
        inputMessage.value = filledMessage.message;
 }}
    
    form.addEventListener ('submit', onSubmitForm)
    
    function onSubmitForm (event) {
        event.preventDefault();
        const sendMessage = JSON.parse(localStorage.getItem('feedback-form-state')) 
        console.log(sendMessage);
    // }
    localStorage.removeItem('feedback-form-state')
    form.reset();
}