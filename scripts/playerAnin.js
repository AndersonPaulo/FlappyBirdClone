const MaxFrame = document.querySelectorAll(".player ul li").length-1
const Player = document.querySelector("#home-page .player ul")
const Frame = document.querySelectorAll("ul img")
const Fundo = document.querySelector("#home-page .content .fundo")
const FundoWidth = document.querySelector(".content .fundoMov1")
const ButtonPlay = document.querySelector(".box2 .button")
let interval = 0
let cont = 0

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
                if(cont > 18.75){
                    cont = 18.75
                }
                Player.style.marginTop = `${cont}rem`
            }
            if(FundoWidth.clientWidth == 206){
                ButtonPlay.addEventListener("touchend",EndButton)
                ButtonPlay.addEventListener("touchstart",StartButton)
                cont+=1.2
                if(cont > 26.25){
                    cont = 26.25
                }
                Player.style.marginTop = `${cont}rem`
            }
            },100) 

        
        document.addEventListener("keydown",(Event)=>{
                if(Event.key===" "){
                    ClickUp = setTimeout(function(){
                        if(FundoWidth.clientWidth == 412){
                            cont-=3.75
                            if(cont < -1.25){
                                cont=-1.25
                            }    
                            Player.style.marginTop = `${cont}rem`  
                        } 

                        if(FundoWidth.clientWidth == 206){
                            cont-=3.75
                            if(cont < 16.25){
                                cont=16.25
                            }    
                            Player.style.marginTop = `${cont}rem`  
                        } 

                    },0.5)                    

                }
        })
        
        

 }


 function StartButton(){
     ButtonPlay.style.backgroundColor = "blue"
     ClickUp = setTimeout(function(){
         
         if(FundoWidth.clientWidth == 206){
             cont-=3.75
             if(cont < 16.25){
                 cont=16.25
             }    
             Player.style.marginTop = `${cont}rem` 
              
         } 

     },0.5)  
}


function EndButton() {
    ButtonPlay.style.backgroundColor = "red"
}

MotionPlayer()
AninPlayer()

