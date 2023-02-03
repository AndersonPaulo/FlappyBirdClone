const MaxFrame = document.querySelectorAll(".player ul li").length-1
const Player = document.querySelector("#home-page .content ul")
const Frame = document.querySelectorAll("ul img")
const Fundo = document.querySelector("#home-page .content .fundo")
let interval = 0
let cont = 0
let cont2 =0
let clickFundo = false

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
    
//Efeito de gravidade sempre puxando pra baixo    
        ClickDown=setInterval(function(){

            cont+=1
            if(cont > 250){
                cont = 250
            }
            Player.style.marginTop = `${cont}px`
            },0.1) 

//Evento com o click do mouse  player fly 
        Fundo.addEventListener("mousedown",(Event) =>{
            ClickUp=setTimeout(function(){
                cont-=60
                if(cont < -200){
                    cont=-200
                }    
                
            },0.5)
            Player.style.marginTop = `${cont}px`
        })
//Evento com o botão space
        document.addEventListener("keydown",(Event)=>{
                if(Event.key===" "){
                    ClickUp=setTimeout(function(){
                        cont-=60
                        if(cont < -200){
                            cont=-200
                        }    
                        
                    },0.5)
                    Player.style.marginTop = `${cont}px`

                }
        })

}

MotionPlayer()
AninPlayer()

