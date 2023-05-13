import {update as updatesnake,draw as drawsnake,snakespeed} from "./snake.js";
import {update as updateFood,draw as drawFood} from "./food.js";
let lastRendertime=0;
const gameboard=document.getElementById("game");
function main(currentTime){
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
    updateFood();

}
function draw(){
    gameboard.innerHTML='';
    drawsnake(gameboard);
    drawFood(gameboard);

}