import { moveWallToLeft } from "./movement.js";
import {Bar} from "./bar.js";
import {Ball} from './ball.js';

moveWallToLeft();

const myBar=new Bar(25,25,25,175);

const ballSize=10;

/*
    ballSize (size is radius), must be added to make ball collapse with bar border
*/
initialPositionForBallX=myBar.x+myBar.width+ballSize;
initialPositionForBallY=myBar.y+(myBar.height/2);


let myBall=new Ball(initialPositionForBallX,initialPositionForBallY,0,0,'black',ballSize);

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
  
*/
myCanvas.addEventListener("mousemove",(event)=>{

    
    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new rectangle will start where pageY
    myBar.draw();

    //myBall.draw();

    /*
        if ball is glued to the bar, must follow it,
        so will be redraw with relative values to the bar, like at the beginning
        but with new values
    */

        if(myBall.isBallGluedAtBar){
           
            initialPositionForBallX=myBar.x+myBar.width+ballSize;
            initialPositionForBallY=myBar.y+(myBar.height/2);

            console.log( initialPositionForBallX);
            console.log(initialPositionForBallY);

            //delete old position, code for it is inside update method
            myBall.update();

            //set new initial positions fot the ball, relative to the bar

            myBall.x=initialPositionForBallX;
            myBall.y=initialPositionForBallY;

           // myBall=new Ball(initialPositionForBallX,initialPositionForBallY,0,0,randomColor(),ballSize);

            myBall.draw();

        }
  
});


