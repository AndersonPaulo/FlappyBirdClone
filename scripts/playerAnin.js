const MaxFrame = document.querySelectorAll(".player ul li").length-1
const Player = document.querySelector("#home-page .player ul")
const Frame = document.querySelectorAll("ul img")
const Fundo = document.querySelector("#home-page .content .fundo")
const FundoWidth = document.querySelector(".content .fundoMov1")
let interval = 0
let cont = 0
// clientWidth == 412
function AninPlayer(){

    let AninInterval = setInterval(function(){
        
        Frame[interval].style.display= 'none'
        interval++
        if(interval > MaxFrame){
            interval = 0
        }
        Frame[interval].style.display = 'block'

    },100)   
}

function MotionPlayer(){
   
        Down=setInterval(function(){
            if(FundoWidth.clientWidth == 412){
                cont+=1.2
                if(cont > 300){
                    cont = 300
                }
                Player.style.marginTop = `${cont}px`
            }
            if(FundoWidth.clientWidth == 206){
                cont+=1.2
                if(cont > 420){
                    cont = 420
                }
                Player.style.marginTop = `${cont}px`
            }
            },0.1) 

        
        document.addEventListener("keydown",(Event)=>{
                if(Event.key===" "){
                    ClickUp = setTimeout(function(){
                        if(FundoWidth.clientWidth == 412){
                            cont-=60
                            if(cont < -20){
                                cont=-20
                            }    
                            Player.style.marginTop = `${cont}px`  
                        } 

                        if(FundoWidth.clientWidth == 206){
                            cont-=60
                            if(cont < 260){
                                cont=260
                            }    
                            Player.style.marginTop = `${cont}px`  
                        } 

                    },0.5)                    

                }
        })
    
}

MotionPlayer()
AninPlayer()

