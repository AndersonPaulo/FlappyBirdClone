const Latao =  document.querySelector(".content .latao1")
let contadorlatao = 0

function getRandomPosition(max,min){
    return Math.random()*(max-min)-min
}

let LeftLatao = setInterval(function(){
    contadorlatao+=0.5
        Latao.style.right =`${contadorlatao}px`
        if(contadorlatao >896){
            contadorlatao = 412
            Latao.style.right =`${contadorlatao}px`
        }
        
},1)
