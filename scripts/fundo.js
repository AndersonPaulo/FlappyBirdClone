const Fundo1 = document.querySelector(".content .fundoMov1")
const Fundo2 = document.querySelector(".content .fundoMov2")
let contador = 0
let contador2 =0

let leftFundo1 = setInterval(function(){
        contador += 0.1
        Fundo1.style.right = `${contador}px`    
        if(contador > 412){
            contador =-412
            Fundo1.style.right = `${contador}px`
        }
         
},10)

let leftFundo2 = setInterval(function(){
    contador2 += 0.1
    Fundo2.style.right = `${contador2}px`
    if(contador2 > 824){
        contador2 =0
        Fundo2.style.right = `${contador2}px`
    }
},10)