var farr=[];     
/* import {update as updatesnake,draw as drawsnake,snakespeed,getsnakehead,snakeintersection} from "./snake.js"; */
/* import {update as updateFood,draw as drawFood} from "./food.js"; */
import { outsidegrid } from "./grid.js";
/* import {getinputDirection} from "./input.js"; */
const buttons=document.querySelector(".buttons");
var sequencearr = ['blue','red','yellow']
let lastRendertime=0;
let gameOver=false;
let snakespeed=5;
let inputDirection={x:0,y:0};
let lastinputDirection={x:0,y:0};
/* let snakex=5,snakey=5; */
/* let foodx,foody; */
const scoreElement=document.querySelector(".score");
const highscoreElement=document.querySelector(".high-score");
let highscore=localStorage.getItem("high-score") || 0;
highscoreElement.innerText=`High score:${highscore}`;
var foodsound=new Audio("snake.mp3");
let container=document.querySelector(".container");
/* let seq1=document.querySelector(".seq1");
let seq2=document.querySelector(".seq2");
let seq3=document.querySelector(".seq3");
let color1=["red","yellow","blue"];
let color2=["yellow","blue","red"];
let color3=["blue","red","yellow"];
let number=Math.floor(Math.random()*3);
let sequence1=seq1.innerHTML=color1[number];
let sequence2=seq2.innerHTML=color2[number];
let sequence3=seq3.innerHTML=color3[number]; */

let score=0;
let snakebody=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


]; 
/* let snakebody=[]; */
let food=[
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
    animation1 = window.requestAnimationFrame(main);
     const secondsSinceLastRender=(currentTime-lastRendertime)/1000
     if (secondsSinceLastRender < 1/snakespeed) return 
    
    
    lastRendertime=currentTime

    update();
    draw(); 
} 
let animation1=window.requestAnimationFrame(main)

 function update(){
    updatesnake();
    /* updateFood(); */
    checkDeath();
    /* updatefoodposition(); */
    /* initgame(); */

} 
function draw(){
    gameboard.innerHTML='';
    drawsnake(gameboard);
    /* drawFood(gameboard); */
    drawfood(gameboard);
    console.log('inside draw')

}
function checkDeath(){
    gameOver=outsidegrid(getsnakehead())
}
const countdown=document.getElementById("countdown");
let setcountdown=setInterval(updatecountdown,1000);
let stratingtime=3;
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

function drawfood(gameboard){
    for (let j=0;j<farr.length;j++){
        const foodelement=document.createElement("div");
        foodelement.style.gridRowStart=farr[j][0];
        foodelement.style.gridColumnStart=farr[j][1];
        foodelement.style.backgroundColor = sequencearr[j]
        gameboard.appendChild(foodelement);
        console.log("inside drawfood")
    }
    // const foodelement1=document.createElement("div");
    // const foodelement2=document.createElement("div");
    // foodelement1.style.gridRowStart=food[1].a;
    // foodelement1.style.gridColumnStart=food[1].b;
    // foodelement2.style.gridRowStart=food[2].a;
    // foodelement2.style.gridColumnStart=food[2].b;
    // foodelement1.classList.add("food1");
    // foodelement2.classList.add("food2");
    // gameboard.appendChild(foodelement1);
    // gameboard.appendChild(foodelement2);
} 

// let foodtrack=1;
// const updatefoodposition = () =>{
//     food[0].a=Math.floor(Math.random()*40);
//     food[0].b=Math.floor(Math.random()*40);

// }
// const updatefoodpositionone = () =>{
//     food[1].a=Math.floor(Math.random()*40);
//     food[1].b=Math.floor(Math.random()*40);

// }
// const updatefoodpositiontwo = () =>{
//     food[2].a=Math.floor(Math.random()*40);
//     food[2].b=Math.floor(Math.random()*40);

// }
function createfood(){
    for (let i=0;i<3;i++){
    fX = Math.floor(Math.random()*40);
    fY = Math.floor(Math.random()*40);
    farr.push([fX,fY])
    }
}
//const initgame = () =>{


//    for(let i=0;i<3;i++){

//console.log(i);
//        if(snakebody[0].x===food[i].a && snakebody[0].y==food[i].b)
//        {
//        console.log(food[i].a);
    
//    if(snakebody[0].x === food[foodtrack].b &&  snakebody[0].y=== food[foodtrack].a){
//        updatefoodposition()
//        snakebody.push([food[0].a,food[0].b])   
//        score++;
//        foodtrack++;
//        scoreElement.innerText =`score:${score}`
        /* foodsound.play(); */
//        highscore = score >= highscore ? score: highscore;
//        localStorage.setItem("high-score",highscore);
//        highscoreElement.innerText=`High score:${highscore}`;
//        snakespeed++;
//        foodarray.shift();
//        return;
//    }
//    else{
//        alert("You lost");
//    }
    
//}

//} 

//}

    // if(snakebody[0].x === food[1].b  &&  snakebody[0].y === food[1].a){
    //     /* updatefoodpositionone(); */
    //     snakebody.push([food[1].a,food[1].b]);
    //     score++;
    //     scoreElement.innerText =`score:${score}`;
    //     snakespeed++;
    //     return;
    // }
    // if(snakebody[0].x === food[2].b  &&  snakebody[0].y === food[2].a){
    //     updatefoodpositiontwo();
    //     snakebody.push([food[2].a,food[2].b]);
    //     score++;
    //     scoreElement.innerText =`score:${score}`;
    //     snakespeed++;
    //     /* foodarray.pop(); */
    //     return; 
    // }
/* colorsequence=["yellow","blue","red"]; */


 const initgame = () =>{
     if(snakebody[0].x === food[0].b &&  snakebody[0].y=== food[0].a){
        //  updatefoodposition()
         snakebody.push([food[0].a,food[0].b])   
         score++;
         farr.shift()
         scoreElement.innerText =`score:${score}`
         /* foodsound.play(); */
         highscore = score >= highscore ? score: highscore;
         localStorage.setItem("high-score",highscore);
         highscoreElement.innerText=`High score:${highscore}`;
         snakespeed++;
         /* farr.shift(); */
        /*  foodarray.shift(); */
     }
         
      if(snakebody[0].x === food[1].b  &&  snakebody[0].y === food[1].a){
        //   updatefoodpositionone();
          snakebody.push([food[1].a,food[1].b]);
          score++;
          scoreElement.innerText =`score:${score}`;
          snakespeed++;
      }
      if(snakebody[0].x === food[2].b   &&  snakebody[0].y === food[2].a){
        //   updatefoodpositiontwo();
          snakebody.push([food[2].a,food[2].b]);
          score++;
          scoreElement.innerText =`score:${score}`;
          snakespeed++;
            /* foodarray.pop(); */
            //return;    
    
   }
}

/*      if(snakebody[0].x === food[1].b  &&  snakebody[0].y === food[1].a){
          updatefoodpositionone();
          snakebody.push([food[1].a,food[1].b]);
          score++;
          scoreElement.innerText =`score:${score}`;
          snakespeed++;
         return;
     }
     if(snakebody[0].x === food[2].b  &&  snakebody[0].y === food[2].a){
         updatefoodpositiontwo();
         snakebody.push([food[2].a,food[2].b]);
         score++;
         scoreElement.innerText =`score:${score}`;
         snakespeed++;
         /* foodarray.pop(); */
         //return; 
     //}
 
    //trying to make things in sequence
/* const initgame = () =>{
    if(snakebody[0].x === food[0].b &&  snakebody[0].y=== food[0].a){
        updatefoodposition()
        snakebody.push([food[0].a,food[0].b])   
        score++;
        scoreElement.innerText =`score:${score}`
        foodsound.play();
        highscore = score >= highscore ? score: highscore;
        localStorage.setItem("high-score",highscore);
        highscoreElement.innerText=`High score:${highscore}`;
        snakespeed=snakespeed+2;

}
const redfood = () =>{
    if(snakebody[0].x === food[1].b  &&  snakebody[0].y === food[1].a){
        updatefoodposition();
        snakebody.push([food[1].a,food[1].b]);
        score++;
        scoreElement.innerText =`score:${score}`;
        snakespeed=snakespeed+2;
    }

    
}  */
    /* for(let i=0;i<snakebody.length;i++)
    {
        if(i!==0 && snakebody[0][1] === snakebody[i][1] && snakebody[0][0] === snakebody[i][0])
        {
            alert("gameover");
        }
         
    } */



/* console.log(snakebody[0].x);
console.log(snakebody[0].y );
console.log(food[2].a);
console.log(food[2].b); */

/* snakebody[0]=[snakex,snakey];
console.log(snakebody[0]); */
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
    /* for (let i = snakebody.length - 1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    } */
    snakebody[0].x+=inputDirection.x;
    snakebody[0].y+=inputDirection.y; 
    /* snakex+=inputDirection.x;
    snakey+=inputDirection.y; */
    initgame();
    /* snakeintersection(); */
   

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
/* function drawsnake(gameboard){
    const snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=foody;
    snakeElement.style.gridColumnStart=foodx;
    snakeElement.classList.add("snake");
    gameboard.appendChild(snakeElement);
} */
function getsnakehead(){
    return snakebody[0]
}
// updatefoodposition()
/* let setIntervalId;
setIntervalId=setInterval(initgame,100); */
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
window.addEventListener("keydown",e=>{
    if(e.key == " ")
    {
        window.cancelAnimationFrame(animation1);
        console.log("vishal");
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

         
