const MaxFrame = document.querySelectorAll(".player ul li").length-1
const home = document.querySelector("#home-page .content ul")
const Frame = document.querySelectorAll("ul img")
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

     home.addEventListener("click",(Event) =>{
        cont=setInterval(function(){
            cont-=5        
            if(cont < -140){
                cont=-140
            }
            Frame[interval].style.marginTop = `${cont}px`
        },1)

        
     })

}

function Motion(){
    cont=setInterval(function(){
        cont+=2
        home.style.marginTop = `${cont}px`
        if(cont > 300){
            cont=300
        }
    },1)
}
console.log(cont)
Motion()
AninPlayer()

