const point = document.querySelector("#home-page .pointColission").getBoundingClientRect()
const player = document.querySelector("#home-page .player ul").getBoundingClientRect()//div1
const Score = document.querySelector("#home-page .score span h3")
let contadorPoint = 0
let verticalMatch = false
let horizontalMatch = false

setInterval(function(){
    if ((point.top > player.top && point.top < player.bottom)||(point.bottom > player.top && point.bottom < player.bottom)) {
        verticalMatch = true
    } else{
        verticalMatch = false
    }
    
    if ((point.right > player.left && point.right < player.right)||(point.left < player.right && point.left > player.left)) {
        horizontalMatch = true
    } else {
        horizontalMatch = false
    }
    
    if (horizontalMatch && vertialMatch){
        contadorPoint+=1 
        Score.innerHTML = `${contadorPoint}` 
    } 
},1)
// setInterval(function(){
   
    
        // if (point.x < player.x + player.width &&
        //     point.x + point.width > player.x &&
        //     point.y < player.y + player.height &&
        //     point.y + point.height > player.y){        
        //         console.log(true)
        //         contadorPoint+=1 
        //         Score.innerHTML = `${contadorPoint}`   
        // }       
    
//   },1)


   
    

