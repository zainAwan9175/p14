let navList=document.querySelector("#myId");
let hero=document.querySelector(".hero")
let manu=document.querySelector(".manu");

manu.addEventListener("click",()=>{
    if(navList.style.height=="50vh")
    {
        console.log("i am in if part")
        navList.style.height="0vh";
      
    }
    else{
        console.log("i am in else")
        navList.style.height="50vh";
    

    }
   
    
})
