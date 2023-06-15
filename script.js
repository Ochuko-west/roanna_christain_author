//initialize AOS

//declare variables
const contactForm = document.getElementById('formId')
const firstInput = document.getElementById('inputfirstname')
const emailInput = document.getElementById('inputEmail')
const subInput = document.getElementById('inputSub')
const msg = document.getElementById('message')
const btn = document.getElementById('btn')
const errMsg1 = document.getElementById('firstNameErr')
const errMsg3 = document.getElementById('emailErr')
const errMsg4 = document.getElementById('subjErr')
const errMsg5 = document.getElementById('msgErr')
//const successMsg = document.getElementById('msg-cont')

// lblArray = Array.from(lbl)
// inputArray = Array.from(inputs)
// inputsArray = Array.from(input)

//add eventlistner to button
btn.addEventListener('click', (e)=>{
    e.preventDefault()
       
    if (firstInput.value === '') {
        errMsg1.textContent = 'Firstname is required'
        errMsg1.style.color = 'red'
    }

    if (!emailInput.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
        errMsg3.textContent = 'Valid Email is required'
       errMsg3.style.color = 'red'
    }
    if (subInput.value === '') {
        errMsg4.textContent = 'Subject is required'
        errMsg4.style.color = 'red'
    }
    if (msg.value === '') {
        errMsg5.textContent = 'Message is required'
        errMsg5.style.color = 'red'
    }
   else(
    sendMail(e)
   )
})