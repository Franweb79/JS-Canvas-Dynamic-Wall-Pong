import { moveWallToLeft } from "./movement.js";
import {Bar} from "./bar.js";
import {Ball} from './ball.js';

moveWallToLeft();

const myBar=new Bar(25,25,25,175);




let myBall=new Ball(200,200,0,0,randomColor(),10);

console.log (myBall);

/*

with setInterval, I can do that bar and ball don´t delet if mouse event is not
fired, that means for example if mouse is not inside the canvas

timer is set to 0 so it is drawn "instantly"
*/

setInterval(()=>{

    myBar.draw();
    myBall.draw();



},0);

/*
    we drawe again bar and ball when mouse event,
    //TODO shoould not be deleted when moWallToTheLeft starts if there is no mouse
    inside canvas
*/
myCanvas.addEventListener("mousemove",(event)=>{
    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new rectangle will start where pageY
    myBar.draw();

    myBall.draw();
  
});