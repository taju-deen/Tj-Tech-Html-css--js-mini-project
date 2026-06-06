const subMenuCont=document.querySelector('.sub-menu-container');
const select=document.querySelector(".select");
const options=document.querySelectorAll('.option');
const area=document.querySelector(".area");
let num1=document.querySelector(".num1")
let num2=document.querySelector(".num2");
const button=document.querySelector("button");
let showResult=document.querySelector(".showResult")
let see=area.innerText;




subMenuCont.addEventListener("click",()=>{
    select.classList.toggle("select");
     select.classList.add("get")
     
  
});

options.forEach((option)=>{
    option.addEventListener("click",(e)=>{
        
   area.innerText=e.target.innerText;
   see=area.innerText;
   

    });
});

button.addEventListener("click",()=>{
   
     
    

   switch(see){
    case"+": showResult.innerText=Number(num1.value)+Number(num2.value)
    break;

     case"-": showResult.innerText=Number(num1.value)-Number(num2.value)
    break;
     case"*": showResult.innerText=(num1.value)*Number(num2.value)
    break;
     case"/": showResult.innerText=(num1.value)/Number(num2.value)
    break;

     

   }
   
    showResult.style.backgroundColor="green";
    showResult.style.color="white"
    
})

