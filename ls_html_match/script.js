const card = document.querySelector(".front-card");

const likeBtn = document.querySelector(".like");
const dislikeBtn = document.querySelector(".dislike");
const resetBtn = document.querySelector(".reset");

likeBtn.onclick = () => swipe("right");
dislikeBtn.onclick = () => swipe("left");
resetBtn.onclick = reset;

function swipe(direction){

if(direction==="right"){
card.style.transform="translateX(500px) rotate(25deg)";
}

if(direction==="left"){
card.style.transform="translateX(-500px) rotate(-25deg)";
}

}

function reset(){

card.style.transform="translateX(0) rotate(0)";

}