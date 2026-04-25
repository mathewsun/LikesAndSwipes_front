const deck = document.getElementById("deck")

let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

let card
let dragging = false


function getTopCard(){
return deck.querySelector(".card")
}


function startDrag(e){

card = getTopCard()
if(!card) return

dragging = true

startX = e.touches ? e.touches[0].clientX : e.clientX
startY = e.touches ? e.touches[0].clientY : e.clientY

card.style.transition="none"
}


function moveDrag(e){

if(!dragging) return

let x = e.touches ? e.touches[0].clientX : e.clientX
let y = e.touches ? e.touches[0].clientY : e.clientY

currentX = x - startX
currentY = y - startY

let rotate = currentX * 0.05

card.style.transform =
`translate(${currentX}px, ${currentY}px) rotate(${rotate}deg)`

}


function endDrag(){

if(!dragging) return
dragging = false

let threshold = 120

if(Math.abs(currentX) > threshold){

let direction = currentX > 0 ? 1 : -1

card.style.transition="transform .5s"

card.style.transform =
`translate(${direction*1000}px, ${currentY}px) rotate(${direction*45}deg)`

setTimeout(()=>{
card.remove()
reset()
},500)

}else{

card.style.transition="transform .3s"

card.style.transform="translate(0,0) rotate(0)"

}

}


function reset(){
currentX=0
currentY=0
}


/* MOUSE EVENTS */

document.addEventListener("mousedown",startDrag)
document.addEventListener("mousemove",moveDrag)
document.addEventListener("mouseup",endDrag)

/* TOUCH EVENTS */

document.addEventListener("touchstart",startDrag)
document.addEventListener("touchmove",moveDrag)
document.addEventListener("touchend",endDrag)


/* BUTTON CONTROLS */

document.getElementById("like").onclick=()=>buttonSwipe(1)
document.getElementById("dislike").onclick=()=>buttonSwipe(-1)


function buttonSwipe(dir){

let c = getTopCard()

if(!c) return

c.style.transition="transform .5s"

c.style.transform=
`translate(${dir*1000}px,0) rotate(${dir*40}deg)`

setTimeout(()=>c.remove(),500)

}