const Latao =  document.querySelector(".content .latao")
let contadorlatao = 0

function getRandomPosition(max,min){
    return Math.floor(Math.random()* max)-min
}

let LeftLatao = setInterval(function(){
    contadorlatao+=0.5
        Latao.style.right =`${contadorlatao}px`
        if(contadorlatao >896){
            contadorlatao = 412
            Latao.style.right =`${contadorlatao}px`
            Latao.style.top = `${getRandomPosition(90,130)}px`
        }
        
},1)
