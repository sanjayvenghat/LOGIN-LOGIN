let all=document.querySelectorAll(".sign") 
let credentials=document.querySelector(".loginCredentials")
all.forEach((val,index)=>{ 
    val.addEventListener("click",()=>{ 
        if(index==0)
            {
                credentials.innerHTML=val.innerHTML 
                credentials.style.backgroundColor="blue" 
                credentials.style.flexDirection="row" 
               
            }
       if (index===1)
        {
            credentials.innerHTML=val.innerHTML 
                credentials.style.backgroundColor="rgb(0, 200, 255)" 
                credentials.style.flexDirection="row"
               
        } 
        if (index===2)
            {
                credentials.innerHTML=val.innerHTML 
                    credentials.style.backgroundColor="red" 
                    credentials.style.flexDirection="row"
            }
        
    })
    
}) 
