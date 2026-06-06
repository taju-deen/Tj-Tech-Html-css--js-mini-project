const btn=document.querySelector(".send");
const sub=document.querySelectorAll(".sub");
let feedBackMessage=document.querySelector("h1");
let finalMessage="";
const see= document.querySelector(".see")


sub.forEach((mood)=>{
    mood.addEventListener("click",()=>{

        sub.forEach(div=> div.classList.remove("active"));

     mood.classList.add("active");

     finalMessage=mood.children[1].innerText;
    
    })
})

btn.addEventListener("click",()=>{
if(finalMessage===""){
    feedBackMessage.innerText="Pls select a feedback";
}
else{
   see.innerHTML=`<p> You choose </p>

               ${finalMessage}`
               
               
    
}

})

