const MaxFrame = document.querySelectorAll(".player ul li").length-1
const Player = document.querySelector(".player ul")
const Frame = document.querySelectorAll(".player ul li img")
const FramePower = document.getElementsByClassName("power")
const MaxFramePower = document.getElementsByClassName("power").length-1
const Fundo = document.querySelector("#home-page .content .fundo")
const FundoWidth = document.querySelector(".content .fundoMov1")
const ButtonPlay = document.querySelector(".button")
const ButtonPower = document.querySelector(".button2")
let interval = 0
let interval2 = 0
let cont = 0
let fly = true
let Playing =  true


let AninInterval = setInterval(function(){ 
        
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
            if(Event.shiftKey===true && Playing == true){  
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

            if(Playing == true){
                ButtonPower.style.backgroundColor ="green"
                FramePower[interval2].style.display= 'none'
                Frame[interval].style.display= 'none'                                                    
                interval2++
            
                if(interval2 > MaxFramePower){
                    interval2 = 0
                }         
                FramePower[interval2].style.display= 'flex'
                    
            }
        },)

        ButtonPower.addEventListener("touchend",()=>{
                
                ButtonPower.style.backgroundColor ="yellow"
                FramePower[interval2].style.display= 'none'
                
        })
        
                

},100)       





   
let Down=setInterval(function(){           
        
    
    if(FundoWidth.clientWidth == 412){
        cont+=0.1
        if(cont >= -0.1){
            cont = -0.1
            
        }

    Player.style.top = `${cont}rem`
    
    }
        if(FundoWidth.clientWidth == 206){
            ButtonPlay.addEventListener("touchend",EndButton)
            ButtonPlay.addEventListener("touchstart",StartButton)
            cont+=0.1
            if(cont >= 9){
                cont = 9
            }
            Player.style.top = `${cont}rem`
        }
    
    },8) 


document.addEventListener("keydown",(Event)=>{
        if(Event.key===" " && Playing == true){
            ClickUp = setTimeout(function(){
                if(FundoWidth.clientWidth == 412){
                    cont-=1.85
                    if(cont < -20.5){
                        cont= -20.5
                    }    
                    Player.style.top = `${cont}rem`  
                } 

            if(FundoWidth.clientWidth == 206){
                cont-=1.25
                if(cont < -1.25){
                    cont=-1.25
                }    
                Player.style.top = `${cont}rem`  
            } 

            },0.5)                    

        }
     
    })

        




 function StartButton(){

    if(Playing == true){
     ButtonPlay.style.backgroundColor = "blue"
    
     
         if(FundoWidth.clientWidth == 206){
             cont-=1.75
             if(cont < -1.25){
                 cont=-1.25
             }    
             Player.style.top = `${cont}rem` 
              
         } 
        
        } 
    
}


function EndButton() {
    ButtonPlay.style.backgroundColor = "red"
}




