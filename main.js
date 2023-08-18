const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');

    const errorMsg = document.getElementsByClassName('error');
    const successIcon = document.getElementsByClassName('success-icon');
    const failureIcon = document.getElementsByClassName('failure-icon');
    const bangladeshiPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(username.value.trim() === ""){
            errorMsg[0].innerHTML = "Username cannot be blank";
            failureIcon[0].style.opacity = "1";
            successIcon[0].style.opacity = "0";
        }else{
            errorMsg[0].innerHTML = "";
            failureIcon[0].style.opacity = "0";
            successIcon[0].style.opacity = "1";
        }
    });

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(number.value.trim() === ""){
            errorMsg[1].innerHTML = "Phone number cannot be blank";
            failureIcon[1].style.opacity = "1";
            successIcon[1].style.opacity = "0";
        }
        else if(bangladeshiPhoneNumberRegex.test(number.value)){
            errorMsg[1].innerHTML = "";
            failureIcon[1].style.opacity = "0";
            successIcon[1].style.opacity = "1";
        }else if(number.length !== 11){
            errorMsg[1].innerHTML = "";
            errorMsg[1].innerHTML = "Phone number is required";
            failureIcon[1].style.opacity = "1";
            successIcon[1].style.opacity = "0";
        }
    });


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(username.value);
        if(email.value.trim() === ""){
            errorMsg[2].innerHTML = "Email address cannot be blank";
            failureIcon[2].style.opacity = "1";
            successIcon[2].style.opacity = "0";
        }
        else if(emailRegex.test(email.value)){
            errorMsg[2].innerHTML = "";
            failureIcon[2].style.opacity = "0";
            successIcon[2].style.opacity = "1";
        }
        else if(!emailRegex.test(email.value)){
            errorMsg[2].innerHTML = "";
            errorMsg[2].innerHTML = "Email address is required";
            failureIcon[2].style.opacity = "1";
            successIcon[2].style.opacity = "0";
        }
    });


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(password.value.trim() === ""){
            errorMsg[3].innerHTML = "Password cannot be blank";
            failureIcon[3].style.opacity = "1";
            successIcon[3].style.opacity = "0";
        }
        else if(password.value.length >= 8){
            errorMsg[3].innerHTML = "";
            failureIcon[3].style.opacity = "0";
            successIcon[3].style.opacity = "1";
        }
        else if(password.value.length < 8){
            errorMsg[3].innerHTML = "";
            errorMsg[3].innerHTML = "Passowrd should be 8 character or more";
            failureIcon[3].style.opacity = "1";
            successIcon[3].style.opacity = "0";
        }
    });

