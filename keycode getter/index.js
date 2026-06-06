
let all=document.querySelector(".all-container");
window.addEventListener("keydown",(event)=>{

 if  (event.key===" "){
   all.innerHTML="space"
 }
   else{
         all.innerHTML=`

         <div class="all-key">
         <div class="key">

                   ${event.key}
               <small> key</small>
         </div>

         <div class="key">

         ${event.keyCode}
               <small> keyCode</small>
         </div>

          <div class="key">

         ${event.code}
               <small> Code</small>
         </div>
         </div
         
         `
   }
 

})