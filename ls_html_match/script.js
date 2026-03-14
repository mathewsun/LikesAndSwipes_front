const cards = document.querySelectorAll(".card");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const reset = document.getElementById("reset");

let currentCard = cards[0];

function swipe(direction){

if(!currentCard) return;

let move = direction === "right" ? 500 : -500;
let rotate = direction === "right" ? 25 : -25;

currentCard.style.transform =
`translateX(${move}px) rotate(${rotate}deg)`;

setTimeout(()=>{
currentCard.remove();

currentCard = document.querySelector(".card");

},300);

}

like.onclick = ()=> swipe("right");
dislike.onclick = ()=> swipe("left");

reset.onclick = ()=>{
location.reload();
};


/* Drag swipe */

let startX=0;
let currentX=0;
let dragging=false;

document.addEventListener("mousedown",e=>{
dragging=true;
startX=e.clientX;
});

document.addEventListener("mousemove",e=>{
if(!dragging || !currentCard) return;

currentX=e.clientX-startX;

currentCard.style.transform=
`translateX(${currentX}px) rotate(${currentX/10}deg)`;
});

document.addEventListener("mouseup",()=>{
dragging=false;

if(Math.abs(currentX)>150){
swipe(currentX>0?"right":"left");
}else{
currentCard.style.transform="translateX(0) rotate(0)";
}

currentX=0;
});