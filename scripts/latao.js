const Latao =  document.querySelector(".content .latao")
const player = document.querySelector("#home-page .player ul")
const point2 = document.querySelector(".content .latao .latao2")
const point1 = document.querySelector(".content .latao .latao1")
const Pointing = document.querySelector("#home-page .content .latao1 .pointing")
const FundosWidth = document.querySelector(".content .fundoMov1")
const ButtonPower2 = document.querySelector(".button2")
const Score = document.querySelector("#home-page .score span h3")
let contadorPoint = 0


let contadorlatao = 0
let contVelocityLatao = 0.5

let verticalMatch = false
let horizontalMatch = false
function detectColission(){
   
    setInterval(()=>{

        let Pla = player.getBoundingClientRect()
        let Po = point1.getBoundingClientRect()
        let Po2 = point2.getBoundingClientRect()
        let Poin = Pointing.getBoundingClientRect()
        
    let rangeIntersect = function(min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1)
    }
   
    let rectIntersect = function (r0, r1) {
        return rangeIntersect(r0.left, r0.right, r1.left, r1.right) && rangeIntersect(r0.top, r0.bottom, r1.top, r1.bottom)
    }
    if(rectIntersect(Pla, Po) || (rectIntersect(Pla,Po2))){
        
        clearInterval(LeftLatao)
        clearInterval(leftFundo)
        clearInterval(AninInterval)
        clearInterval(Down)
        Playing = false
    } 
    if(rectIntersect(Pla, Poin)&& Poin.left >= 210){
         contadorPoint+=1 
         
    }   
    Score.innerHTML = `${contadorPoint}`
        
        
    },100)
   
}


function getRandomPosition(max,min){
    return Math.floor(Math.random()* max)-min
}
function getRandomPosition2(){
    let randon = Math.floor(Math.random()*30)-40
   
    
    return randon
    
}

document.addEventListener("keydown",(Event)=>{
    if(Event.shiftKey===true){ 
        contVelocityLatao = 1
    }
})

document.addEventListener("keyup",(Event)=>{
    if(Event.shiftKey===false){
        contVelocityLatao = 0.5
     }
})

let LeftLatao = setInterval(function(){
    if(FundosWidth.clientWidth == 412){
            contadorlatao+=0.5
            Latao.style.right =`${contadorlatao}px`
          
            if(contadorlatao >412){
                contadorlatao = -128
                Latao.style.right =`${contadorlatao}px`
                Latao.style.top = `${getRandomPosition(100,100)}px`
               
            }
        } 
    if(FundosWidth.clientWidth == 206){
            contadorlatao+=0.5
            Latao.style.right =`${contadorlatao}px`
           
            if(contadorlatao >206){
                contadorlatao = -128
                Latao.style.right =`${contadorlatao}px`
                Latao.style.top = `${getRandomPosition2()}px`
                
            }
        }       
},10)

detectColission()