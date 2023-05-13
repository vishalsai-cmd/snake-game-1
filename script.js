/* import {update as updatesnake,draw as drawsnake,snakespeed,getsnakehead,snakeintersection} from "./snake.js"; */
/* import {update as updateFood,draw as drawFood} from "./food.js"; */
import { outsidegrid } from "./grid.js";
import {getinputDirection} from "./input.js"
let lastRendertime=0;
let gameOver=false;
const snakespeed=5;
const snakebody=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


];
const food=[
    {a:10,b:20}
]
const gameboard=document.getElementById("game");
function main(currentTime){
    if(gameOver){
        return alert("you lose");
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
setInterval(updatecountdown,1000);
let stratingtime=1;
let time=stratingtime*60;
function updatecountdown(){
    const minutes=Math.floor(time/60);
    const seconds=time%60;
    countdown.innerHTML=`${minutes}:${seconds}`;
    time--;
    if(minutes<0)
    {
        alert("game over")
    }

}
function drawfood(gameboard)
{
    const foodelement=document.createElement("div");
    foodelement.style.gridRowStart=food[0].a;
    foodelement.style.gridColumnStart=food[0].b;
    foodelement.classList.add("food");
    gameboard.appendChild(foodelement);
}
const updatefoodposition = () =>{
    food[0].a=Math.floor(Math.random()*40);
    food[0].b=Math.floor(Math.random()*40);
    console.log("vijay");

}
const initgame = () =>{
    if(snakebody[0].x === food[0].a  &&  snakebody[0].y === food[0].b){
        updatefoodposition();
        snakebody.push([food[0].a,food[0].b]);
        console.log("vishal");
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
setIntervalId=setInterval(initgame,100)