let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
// let ic = document.querySelector(".ic");
let firstName,lastName,email,password;
let fnTarget,lnTarget,emailTarget,pwdTarget;
let field;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let ef of emptyFields){
    ef.classList.add("d-none");
}

formData.addEventListener("keyup", (event) =>{
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName":
            lastName =  event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email =   event.target.value; 
            emailTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;  
        default:
            firstName = lastName = email = password ="";
            break;
    }
});

submitButton.addEventListener("click",(event) =>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        emptyFields[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag = false;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag = true;
        }
    }else
        emptyFields[0].classList.remove("d-none");
    if(lastName){
        emptyFields[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }
        else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag = true;
        }
    }else
        emptyFields[1].classList.remove("d-none");
    if(email){
        emptyFields[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            eFlag = false;
        }else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            eFlag = true;
        }
    }else{
        emptyFields[2].classList.remove("d-none");
    }
    if(password){
        emptyFields[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pwdFlag = false;
        }
        else{
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
            pwdFlag = true;
        }
            
    }else
        emptyFields[3].classList.remove("d-none");

    if(fnFlag && lnFlag&&eFlag&&pwdFlag){
        fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
        window.location.href = "success.html";
    }
});

showPasswordBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") ==="text"){
        pwdTarget.setAttribute("type", "password")
        // ic.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00024 10C1.00024 6.1 4.10024 3 8.00024 3C11.9002 3 15.0002 6.1 15.0002 10H14.0002C14.0002 6.7 11.3002 4 8.00024 4C4.70024 4 2.00024 6.7 2.00024 10H1.00024ZM5.00024 10C5.00024 8.3 6.30024 7 8.00024 7C9.70024 7 11.0002 8.3 11.0002 10C11.0002 11.7 9.70024 13 8.00024 13C6.30024 13 5.00024 11.7 5.00024 10ZM6.00024 10C6.00024 11.1 6.90024 12 8.00024 12C9.10024 12 10.0002 11.1 10.0002 10C10.0002 8.9 9.10024 8 8.00024 8C6.90024 8 6.00024 8.9 6.00024 10Z" fill="#424242"/>
        //         </svg>`

    }else{
        pwdTarget.setAttribute("type", "text")
        // ic.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00024 2C6.50024 2 5.20024 2.4 4.10024 3.2L4.90024 3.9C5.80024 3.3 6.80024 3 8.00024 3C11.3002 3 14.0002 5.7 14.0002 9H15.0002C15.0002 5.1 11.9002 2 8.00024 2ZM1.00024 3.00005L2.60024 4.50005C1.60024 5.70005 1.00024 7.30005 1.00024 9.00005H2.00024C2.00024 7.50005 2.50024 6.20005 3.40024 5.20005L5.60024 7.20005C5.20024 7.70005 5.00024 8.30005 5.00024 9.00005C5.00024 10.7 6.30024 12 8.00024 12C8.80024 12 9.50024 11.7 10.0002 11.2L13.0002 14L13.7002 13.3L1.70024 2.30005L1.00024 3.00005ZM6.30024 7.90005L9.20024 10.6C8.90024 10.8 8.50024 11 8.00024 11C6.90024 11 6.00024 10.1 6.00024 9.00005C6.00024 8.60005 6.10024 8.20005 6.30024 7.90005ZM11.0002 9.5L10.0002 8.6C9.80024 7.8 9.10024 7.1 8.20024 7L7.20024 6.1C7.50024 6 7.70024 6 8.00024 6C9.70024 6 11.0002 7.3 11.0002 9V9.5Z" fill="#424242"/>
        // </svg>`
    }
});
