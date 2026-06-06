const emoji=document.querySelector(".emoji");

emoji.addEventListener("mouseover",select)


const allEmoji=["😊","😂","🤣","😍","😘","😁","😢" ,"😎","😜"]






function select(){

   const random=Math.random()*allEmoji.length;
  const final= Math.floor(random);
 
  emoji.textContent=allEmoji[final];
  

}
