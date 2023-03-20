const Latao =  document.querySelector(".content .latao")
const FundosWidth = document.querySelector(".content .fundoMov1")
const ButtonPower2 = document.querySelector(".box4 .button2")
let contadorlatao = 0
let contVelocityLatao = 0.5
function getRandomPosition(max,min){
    return Math.floor(Math.random()* max)-min
}

document.addEventListener("keydown",(Event)=>{
    if(Event.shiftKey===true){ 
        contVelocityLatao = 2
    }
})

document.addEventListener("keyup",(Event)=>{
    if(Event.shiftKey===false){
        contVelocityLatao = 0.5
     }
})

ButtonPower1.addEventListener("touchstart",()=>{
    contVelocityLatao = 2
})
ButtonPower1.addEventListener("touchend",()=>{
    contVelocityLatao = 0.5
})


let LeftLatao = setInterval(function(){
    if(FundosWidth.clientWidth == 412){
            contadorlatao+=contVelocityLatao
            Latao.style.right =`${contadorlatao}px`
            if(contadorlatao >896){
                contadorlatao = 412
                Latao.style.right =`${contadorlatao}px`
                Latao.style.top = `${getRandomPosition(90,130)}px`
            }
        } 
    if(FundosWidth.clientWidth == 206){
            contadorlatao+=contVelocityLatao
            Latao.style.right =`${contadorlatao}px`
            if(contadorlatao >896){
                contadorlatao = 206
                Latao.style.right =`${contadorlatao}px`
                Latao.style.top = `${getRandomPosition(90,130)}px`
            }
        }       
},1)

