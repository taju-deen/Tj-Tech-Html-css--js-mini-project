const form=document.querySelector("form");
const name=document.querySelector("#Name");
const email=document.querySelector("#email");
const inputPassword=document.querySelector("#input-password");
const confirmPassword=document.querySelector("#confirm-password");
const inputs=document.querySelectorAll("input")
const message=document.querySelector(".message")
const input=document.querySelector("input")

form.addEventListener(("submit"),(e)=>{

let errors=[];



errors=[...getName(name.value),...getEmail(email.value),...getPassword(inputPassword.value),...getConfirmPassword(confirmPassword.value)];
 




if(errors.length>0){
    e.preventDefault();
    message.textContent=`${errors}`

}




})

function getName(nameInput){
    let errors=[]
    if(nameInput.trim()==="" || nameInput.trim()===null){

        errors.push("Enter your name")
        name.classList.add("incorrect")

    }
    
    else {
    name.classList.remove("incorrect");
   
   }
   

   return errors
 
}

function getEmail(emailInput){
    let mail=[]

    if(emailInput.trim()==="" || emailInput==null){
        mail.push("Enter your email")
        email.classList.add("incorrect")


    }
    
    else if(!emailInput.includes("@")){
    mail.push("Enter a relevant email");
   email.classList.add("incorrect")
    
}

    else{
        email.classList.remove("incorrect");

    }
    return mail
   }

   function getPassword(passwordInput){
    let password=[]

    if(passwordInput==="" || passwordInput==null){
        password.push("Enter your password")
        inputPassword.classList.add("incorrect")


    }
    
    else if(passwordInput.length<4){
        password.push("Enter a strong password")
   
   input.classList.add("incorrect")
    
   }
   return password
   }

   function getConfirmPassword(confirmPasswordInput){
    let confirmPassworddata=[]

    if(confirmPasswordInput==="" || confirmPasswordInput===null){
       confirmPassworddata.push("Confirm your password")
        confirmPassword.classList.add("incorrect")


    }
    
    else if(confirmPasswordInput!=inputPassword.value){
   confirmPassworddata.push("password dont match")
   confirmPassword.classList.add("incorrect")
   inputPassword.classList.add("incorrect")

   }
   else{
    confirmPassword.classList.remove("incorrect")
    inputPassword.classList.remove("incorrect")
   }

   

   return confirmPassworddata
 
}

inputs.forEach((input)=>{
    input.addEventListener("change",()=>{
        if(input.classList.contains("incorrect"))
            input.classList.remove("incorrect")

    })
})






