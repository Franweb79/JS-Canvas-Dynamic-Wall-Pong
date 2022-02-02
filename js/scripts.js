import { moveWallToLeft } from "./canvas-movement.js";
import {Bar} from "./bar.js";
import {Ball} from './ball.js';
import {Counter} from './counter.js';


/**
 * myBar is declared as global with the window keyword, because we need it
 * this way. SEE READ ME NOTES FOR DEVELOPERS NUMBER 7 FOR DETAILS  
 * 
 */
window.myBar=new Bar(25,25,25,175);


initialPositionForBallX=myBar.x+myBar.width+ballSize;
initialPositionForBallY=myBar.y+(myBar.height/2);


let myBall=new Ball(initialPositionForBallX,initialPositionForBallY,0,0,'black',ballSize);


//global variable, because we need a reference to increase it on ball.js when ball is <=0
 window.myCounter= new Counter(0,48);

 moveWallToLeft();


/*

    with setInterval, I can do that bar and ball don´t delete if mouse event is not
    fired, that means for example if mouse is not used inside the canvas

    The number value will be set to 15 to avoid strange ball speed behavior when we move the bar.
    If we set too low value (for example, 4 that i think is the mimun allowed by HTML5)
    can lead to that

*/

setInterval(()=>{

    
    myBar.draw();
    
    myBall.draw();
    myCounter.drawCounter();
    



},15);

/*
    we draw again bar and ball when mouse move event,
  
*/
myCanvas.addEventListener("mousemove",(event)=>{

    
    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new bar position will start where pageY
    myBar.draw();


    /*
        if ball is "glued" to the bar (when we start the game or we had one "goal"), 
        the ball must be kept on glued to the bar when we move it,
        so ball will be re-draw with relative values to the bar, like at the beginning
        but with new values
    */

        if(myBall.isBallGluedAtBar){
           
            initialPositionForBallX=myBar.x+myBar.width+ballSize;
            initialPositionForBallY=myBar.y+(myBar.height/2);

        

            //delete old ball position, code for it is inside update method
            myBall.update();

            //set new initial positions fot the ball, relative to the bar

            myBall.x=initialPositionForBallX;
            myBall.y=initialPositionForBallY;



            console.log ("glue");

        }
        myBall.draw();
});

/**
 * on this click event we will control if it is first click (with ball glued at bar),
 * in that case we start the loop as well and the intervals to make
 * ball´s speed up increase and make bar size smaller at a certain time rate
 * that time rate must be the same specified for moveWallToTheLeft()
 */
myCanvas.addEventListener("click",(event)=>{
    

    if(myBall.isBallGluedAtBar){

        
        myBall.isBallGluedAtBar=false;
        
        myBall.loop();

        /*
        at same time interval that wall moves to the left,will increase 
        speedball on X and Y by 0.5

        Note that, as velX and valY can be negative, then we must use a different operation
        ( + or - ), because otherwise if e.g valX is -2 and we simply do +0.5
        that would make it slower

        This interval will be cleared when user fails to get the ball with the bar
        on ball.js
        
        */
        speedUpInterval=setInterval(()=>{

            if(myBall.velX<0){
                myBall.velX= (myBall.velX-0.5);
            }else{
                myBall.velX= (myBall.velX+0.5);

            }

            if(myBall.velY<0){
                myBall.velY=myBall.velY-0.5;
            }else{
                myBall.velY=myBall.velY+0.5;

            }


        },5000);


        
        barSizeDownInterval=setInterval(() => {

            //we set a bar minimum to 50
            if(myBar.height>50){

                /*we delete old rectangle with old size, decrease size and then draw new bar*/

                myBar.deleteOldRectangle();
                myBar.height-=25;
                myBar.draw();

            }
            
        }, 5000);
        
    }
});


