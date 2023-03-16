const Fundo1 = document.querySelector(".content .fundoMov1")
const Fundo2 = document.querySelector(".content .fundoMov2")


let contador1  =  0
let contador2  =  0
let contador3  =  0
let contador4  =  0

let leftFundo1 = setInterval(function(){
    if(Fundo1.clientWidth == 412){
      
        contador1 += 0.1
        contador2 += 0.1
        Fundo2.style.right = `${contador2}px`
        Fundo1.style.right = `${contador1}px`    
        if(contador1 >= 412){
            contador1 = -412
            Fundo1.style.right = `${contador1}px`
        }      
   
        
        if(contador2 >= 824){
            contador2 =0
            Fundo2.style.right = `${contador2}px`

        }
    
    }
    else{
        contador4 += 0.1
        contador3 += 0.1
        Fundo2.style.right = `${contador4}px` 
        Fundo1.style.right = `${contador3}px`   
        if(contador4 >= 412){
            contador4 = 0
            Fundo2.style.right = `${contador4}px`

        }        
            
        if(contador3 >= 206){
            contador3 =-206
            Fundo1.style.right = `${contador3}px`
       }
    }
   
},1)
 



