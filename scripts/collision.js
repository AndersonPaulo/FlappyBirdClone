const point = document.querySelector("#home-page .pointColission").getBoundingClientRect()
const player = document.querySelector("#home-page .player ul").getBoundingClientRect()
const Score = document.querySelector("#home-page .score span h3")
let contadorPoint = 0



const rectIntersect = function() {

    return Math.max(point.left, point.right) >= Math.min(player.left, player.right) && 
    Math.min(point.left, point.right) <= Math.max( player.left, player.right)&&
    Math.max(point.top, point.bottom) >= Math.min(player.top,player.bottom) && 
    Math.min(point.top,point.bottom) <= Math.max(player.top,player.bottom)

}
if(rectIntersect()){
    contadorPoint+=1 
    Score.innerHTML = `${contadorPoint}`
    console.log(rectIntersect())
   
}


                  
    

