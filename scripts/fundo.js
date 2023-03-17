const Fundo1 = document.querySelector(".content .fundoMov1")
const Fundo2 = document.querySelector(".content .fundoMov2")
let contador1  =  0
let contador2  =  0
let contador3  =  0
let contador4  =  0

let leftFundo = setInterval(function(){
    if(Fundo1.clientWidth == 412){
      
        contador1 += 0.1
        contador2 += 0.1

        Fundo2.style.right = `${contador2}rem`
        Fundo1.style.right = `${contador1}rem`    
        if(contador1 >= 25.75){
            contador1 = -25.75
            Fundo1.style.right = `${contador1}rem`
        }      
   
        
        if(contador2 >= 51.5){
            contador2 =0
            Fundo2.style.right = `${contador2}rem`

        }
    
    }
    if(Fundo1.clientWidth == 206){

        contador4 += 0.1
        contador3 += 0.1

        Fundo2.style.right = `${contador4}rem` 
        Fundo1.style.right = `${contador3}rem` 
        
        if(contador3 >= 12.875){
            contador3 =-12.875
            Fundo1.style.right = `${contador3}rem`
       }

        if(contador4 >= 25.75){
            contador4 = 0
            Fundo2.style.right = `${contador4}rem`
        }        
            

    }
   
},100)
 



