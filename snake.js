import {getinputDirection} from "./input.js"
export const snakespeed=5;
let newsegment=0;
const snakebody=[
    {x:10,y:11}


]
export function update(){
    addsegments(); 
    const inputDirection=getinputDirection();
    for(let i=snakebody.length-2;i>=0;i--){
        snakebody[i+1]={...snakebody[i]}
    }
    snakebody[0].x+=inputDirection.x;
    snakebody[0].y+=inputDirection.y; 

}
export function draw(gameboard){
    snakebody.forEach(segment =>  {
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameboard.appendChild(snakeElement);
    })
    

}
export function expandsnake(amount){
    newsegment+=amount;
}
export function onSnake(position){
    return snakebody.some(segment =>{
        return equalPositions(segment,position)
    })
}
function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
 function addsegments(){
    for(let i=0;i<newsegment.length;i++){
        snakebody.push({...snakebody[snakebody.length -1]});
        newsegment=0;
    }
}