const MaxFrame = document.querySelectorAll(".player ul li").length-1
const Player = document.querySelector("#home-page .player ul")
const Frame = document.querySelectorAll(".player ul li img")
const FramePower = document.getElementsByClassName("power")
const MaxFramePower = document.getElementsByClassName("power").length-1
const Fundo = document.querySelector("#home-page .content .fundo")
const FundoWidth = document.querySelector(".content .fundoMov1")
const ButtonPlay = document.querySelector(".box2 .button")
const ButtonPower = document.querySelector(".box4 .button2")
let interval = 0
let interval2 = 0
let cont = 0
let time = 0
let fly = true

function AninPlayer(){

    let AninInterval = setInterval(function(){ 
            time++
            Frame[interval].style.display= 'none'     
            FramePower[interval2].style.display= 'none'
            interval++
          
            if(interval >5){
                interval = 0
            }
            if(fly==false){
                interval2++
                if(interval2 > MaxFramePower){
                    interval2 = 0
                } 
               
            }
            if(fly==true){
                
                Frame[interval].style.display= 'flex' 
            
            }
            
            document.addEventListener("keydown",(Event)=>{
                if(Event.shiftKey===true){  
                     Frame[interval].style.display= 'none'                                                    
                     fly = false                   
                    
                    
                    if(interval2 > MaxFramePower){
                        interval2 = 0
                    }         
                FramePower[interval2].style.display= 'flex'   
            }           
            })
            
            document.addEventListener("keyup",(Event)=>{
                if(Event.shiftKey === false){
                    
                    fly = true                    
                    FramePower[interval2].style.display= 'none'
                }
            }) 
            
            ButtonPower.addEventListener("touchstart",()=>{
                    ButtonPower.style.backgroundColor ="green"
                    Frame[interval].style.display= 'none'                                                    
                    interval2++
                
                    if(interval2 > MaxFramePower){
                        interval2 = 0
                    }         
                    FramePower[interval2].style.display= 'flex'
                        

            },)

            ButtonPower.addEventListener("touchend",()=>{
                    
                    ButtonPower.style.backgroundColor ="yellow"
                    //FramePower[interval2].style.display= 'none'
                    
            })
                  

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

