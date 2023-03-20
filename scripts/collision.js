const player = document.querySelector("#home-page .player ul")
const point = document.querySelector("#home-page .pointColission")

const Score = document.querySelector("#home-page .score span h3")
let contadorPoint = 0
let verticalMatch = false
let horizontalMatch = false

// setInterval(function(){

    // let playerBottom = +window.getComputedStyle(player).bottom.replace("px"," ") 
    // let playerRight = +window.getComputedStyle(player).right.replace("px"," ") 
    // let pointBottom = +window.getComputedStyle(point).bottom.replace("px"," ")
    // let pointRight = +window.getComputedStyle(point).right.replace("px"," ")
 
    // if((rect1.offsetLeft + rect1.offsetWidth) >= rect2.offsetLeft &&
    // (rect2.offsetLeft + rect2.offsetWidth) >= rect1.offsetLeft &&
    // (rect1.offsetLeft + rect1.offsetHeight ) >= rect2.offsetLeft &&
    // (rect2.offsetLeft + rect2.offsetHeight ) >= rect1.offsetLeft){
    //     contadorPoint+=1
       
    // }

    // if(player.top + player.height > point.top||playerBottom + player.width > pointBottom){
    // }
//     console.log((point.offsetTop  > player.offsetTop  && point.offsetTop  < playerBottom)||(pointBottom > player.offsetTop  && pointBottom < playerBottom))
//     if ((point.offsetTop  > player.offsetTop  && point.offsetTop  < playerBottom)||(pointBottom > player.offsetTop  && pointBottom < playerBottom)) {
//         verticalMatch = true
        
//     } else{
//         verticalMatch = false
       
//     }
//     if ((pointRight > player.offsetLeft  && pointRight < playerRight)||(point.offsetLeft  < playerRight && point.offsetLeft  > player.offsetLeft )) {
//         horizontalMatch = true
//     } else {
//         horizontalMatch = false
//     }
    
//     if (horizontalMatch && vertialMatch){
//         contadorPoint+=1 
        
//     }
//      Score.innerHTML = `${contadorPoint}`  
// },1)
// setInterval(function(){
   
        
//         if (point.x < player.x + player.width &&
//             point.x + point.width > player.x &&
//             point.y < player.y + player.height &&
//             point.y + point.height > player.y){        
//                 console.log(true)
//                 contadorPoint+=1 
//                 Score.innerHTML = `${contadorPoint}`   
//         }       
    
//   },1)


  setInterval(function(){
    console.log(point.offsetLeft < player.offsetLeft + player.offsetWidth &&
        point.offsetLeft + point.offsetWidth > player.offsetLeft &&
        point.offsetTop < player.offsetTop + player.offsetHeight  &&
        point.offsetTop + point.offsetHeight  > player.offsetTop)
    
    if (point.offsetLeft < player.offsetLeft + player.offsetWidth &&
        point.offsetLeft + point.offsetWidth > player.offsetLeft &&
        point.offsetTop < player.offsetTop + player.offsetHeight  &&
        point.offsetTop + point.offsetHeight  > player.offsetTop){        
            
            contadorPoint+=1 
            Score.innerHTML = `${contadorPoint}`  
    }       
     
},1) 
    

