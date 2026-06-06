const menuColumn=document.querySelector(".menu-column");
const Navigation=document.querySelector("ul");
const individual=document.querySelectorAll("a")
const nav=document.querySelector("nav")
const about=document.querySelector("#about")
const sections=document.querySelectorAll("section")



menuColumn.addEventListener("click",()=>{
    Navigation.classList.toggle("Total-display")
    

});



individual.forEach((single)=>{
    single.addEventListener("click",()=>{
        Navigation.classList.remove("Total-display");
    
     individual.forEach((div)=>{
        div.classList.remove("liclick")
 single.classList.add("liclick")


     })
    
       
    })
    
})
window.addEventListener("scroll",()=>{
    
    if (window.scrollY>30){
  nav.style.width="100%"
  nav.style.top="0"
  nav.style.borderRadius=0
  


    }
    else{
        nav.style.top="1.5rem"
        nav.style.width="90%"
    }


    let current="";


   sections.forEach((section)=>{
    const height=section.offsetTop;

    if(pageYOffset >= height -150){
      const get=  section.getAttribute("id")
      current=get;
    }
    
  
   })
   individual.forEach((link)=>{
     link.classList.remove("liclick");
    if(link.getAttribute("href")==`#${current}`){
       
        link.classList.add("liclick")
    }

   });
    

 
})


