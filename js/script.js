//email Input-field
let input = document.querySelector('#email');

//subscribe-button
let subBtn = document.querySelector('#subbtn');

//click-event for subscribe-button
subBtn.addEventListener('click', () =>{ValidateEmail(input)});

//event-handler
function ValidateEmail(mail){
    //required pattern for email-input
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //if the pattern fits -> show success-div
    if (mail.value.match(mailFormat)){
        let wrapper = document.querySelector('.wrapper');
        let wrapperSuccess = document.querySelector('.wrapperSuccess');
        wrapper.style.display = "none";
        wrapperSuccess.style.display = "flex";
    
        let currentMail = document.querySelector('#currentMail');
        currentMail.innerHTML = input.value;

        console.log("sending was successful");
    } else { 

        // if not -> show invalid email stuff
        let errorLabel = document.querySelector('#labelError');
        errorLabel.innerHTML = "Valid email required";
        console.error("invalid email");

        input.style.border = "1px solid rgb(236, 62, 62)";
        input.style.color = "rgb(236, 62, 62)";
        input.style.backgroundColor = "rgb(252, 208, 208)";
    }
}

//click dissmiss-button and turn back
dismissBtn.addEventListener('click', () =>{
    let wrapper = document.querySelector('.wrapper');
    let wrapperSuccess = document.querySelector('.wrapperSuccess');
    wrapper.style.display = "flex";
    wrapperSuccess.style.display = "none";
});