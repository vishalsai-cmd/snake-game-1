/* import {update as updatesnake,draw as drawsnake,snakespeed,getsnakehead,snakeintersection} from "./snake.js"; */
/* import {update as updateFood,draw as drawFood} from "./food.js"; */
import { outsidegrid } from "./grid.js";
/* import {getinputDirection} from "./input.js"; */
const buttons=document.querySelector(".buttons");
let lastRendertime=0;
let gameOver=false;
const snakespeed=5;
let inputDirection={x:0,y:0};
let lastinputDirection={x:0,y:0};
const scoreElement=document.querySelector(".score");
const highscoreElement=document.querySelector(".high-score");
let score=0;
const snakebody=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


];
const food=[
    {a:10,b:20},
    {a:5,b:10},
    {a:15,b:25}
]
const gameboard=document.getElementById("game");
function main(currentTime){
    if(gameOver){
        alert("you lose.press ok to restart");
        location.reload();
        return;
        
    }
    window.requestAnimationFrame(main);
     const secondsSinceLastRender=(currentTime-lastRendertime)/1000
     if (secondsSinceLastRender < 1/snakespeed) return 
    
    
    lastRendertime=currentTime;

    update();
    draw(); 
} 
window.requestAnimationFrame(main)

 function update(){
    updatesnake();
    /* updateFood(); */
    checkDeath();
    /* updatefoodposition(); */

}
function draw(){
    gameboard.innerHTML='';
    drawsnake(gameboard);
    /* drawFood(gameboard); */
    drawfood(gameboard);

}
function checkDeath(){
    gameOver=outsidegrid(getsnakehead())
}
const countdown=document.getElementById("countdown");
let setcountdown=setInterval(updatecountdown,1000);
let stratingtime=1;
let time=stratingtime*60;
function updatecountdown(){
    const minutes=Math.floor(time/60);
    const seconds=time%60;
    countdown.innerHTML=`time-remaining=${minutes}:${seconds}`;
    time--;
    if(minutes<0)
    {
        clearInterval(setcountdown);
        clearInterval(setIntervalId);
        alert("game over.press ok to restart");
        location.reload();
    }

}
function drawfood(gameboard)
{
    const foodelement=document.createElement("div");
    const foodelement1=document.createElement("div");
    const foodelement2=document.createElement("div");
    foodelement.style.gridRowStart=food[0].a;
    foodelement.style.gridColumnStart=food[0].b;
    foodelement1.style.gridRowStart=food[1].a;
    foodelement1.style.gridColumnStart=food[1].b;
    foodelement2.style.gridRowStart=food[2].a;
    foodelement2.style.gridColumnStart=food[2].b;
    foodelement.classList.add("food");
    foodelement1.classList.add("food1");
    foodelement2.classList.add("food2");
    gameboard.appendChild(foodelement);
    gameboard.appendChild(foodelement1);
    gameboard.appendChild(foodelement2);
}
const updatefoodposition = () =>{
    food[0].a=Math.floor(Math.random()*40);
    food[0].b=Math.floor(Math.random()*40);
    food[1].a=Math.floor(Math.random()*40);
    food[1].b=Math.floor(Math.random()*40);
    food[2].a=Math.floor(Math.random()*40);
    food[2].b=Math.floor(Math.random()*40);
    console.log("vijay");

}
const initgame = () =>{
    if(snakebody[0].x === food[0].a  &&  snakebody[0].y === food[0].b){
        updatefoodposition();
        snakebody.push([food[0].a,food[0].b]);
        score++;
        scoreElement.innerText =`score:${score}`
        console.log("vishal");
        return;
    }
    if(snakebody[0].x === food[1].a  &&  snakebody[0].y === food[1].b){
        updatefoodposition();
        snakebody.push([food[1].a,food[1].b]);
        score++;
        scoreElement.innerText =`score:${score}`
        console.log("vishal");
        return;
    }
    if(snakebody[0].x === food[2].a  &&  snakebody[0].y === food[2].b){
        updatefoodposition();
        snakebody.push([food[2].a,food[2].b]);
        score++;
        scoreElement.innerText =`score:${score}`
        console.log("vishal");
        return;
    }

}
/* if(snakebody[0].x === food[0].a  &&  snakebody[0].y === food[0].b){
    updatefoodposition();
    snakebody.push([food[0].a,food[0].b]);
    console.log("vishal"); 
} */
function updatesnake(){
    const inputDirection=getinputDirection();
    for(let i=snakebody.length-2;i>=0;i--){
        snakebody[i+1]={...snakebody[i]}
    }
    snakebody[0].x+=inputDirection.x;
    snakebody[0].y+=inputDirection.y; 

}
function drawsnake(gameboard){
    snakebody.forEach(segment =>  {
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameboard.appendChild(snakeElement);
    })
    

}
function getsnakehead(){
    return snakebody[0]
}
updatefoodposition();
let setIntervalId;
setIntervalId=setInterval(initgame,100);
let highscore=localStorage.getItem("high-score");
highscoreElement.innerText = `high score : ${highscore}`;
window.addEventListener("keydown", e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastinputDirection.y!== 0) break
            inputDirection = {x:0,y:-1}
            break
        case 'ArrowDown':
            if(lastinputDirection.y !== 0) break
            inputDirection = {x:0,y:1} 
            break
        case 'ArrowRight':
            if(lastinputDirection.x !== 0) break
            inputDirection = {x:1,y:0}
            break
        case 'ArrowLeft':
            if(lastinputDirection.x !== 0) break
            inputDirection = {x:-1,y:0}
            break       

    }

})
function getinputDirection(){
    lastinputDirection=inputDirection;
    return inputDirection;
}
/* function up(){
    inputDirection = {x:0,y:-1}
}
up();
function down(){
    inputDirection = {x:0,y:-1}
}
down();
function right(){
    inputDirection = {x:0,y:-1}
}
right();
function left(){
    inputDirection = {x:0,y:-1}
}
left(); */
const up=document.querySelector(".up");
const down=document.querySelector(".down");
const right=document.querySelector(".right");
const left=document.querySelector(".left");
up.addEventListener("click",() =>{
    inputDirection = {x:0,y:-1}
})
down.addEventListener("click",() =>{
    inputDirection = {x:0,y:1}
})
right.addEventListener("click",() =>{
    inputDirection = {x:1,y:0}
})
left.addEventListener("click",() =>{
    inputDirection = {x:-1,y:0}
})
function snakeintersection(){
    return onSnake(snakebody[0]),{ignoreHead:true};
}
//final line