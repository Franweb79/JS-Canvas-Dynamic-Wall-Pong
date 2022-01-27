import { moveWallToLeft } from "./canvas-movement.js";
import {Bar} from "./bar.js";
import {Ball} from './ball.js';
import {Counter} from './counter.js';

//TODO apunta lo del window. para hacer la variable global 
//   https://stackoverflow.com/questions/43605434/what-is-the-correct-way-to-define-global-variable-in-es6-modules-->

/**
 * myBar is declared as global with the window keyword, because we need it
 * this way. SEE NOTES FOR DEVELOPERS NUMBER xxx FOR DETAILS 
 * //TODO on readme put number to this note
 * 
 * 
 */

window.myBar=new Bar(25,25,25,175);

const ballSize=10;

/*
    ballSize (size is radius), must be added to make ball collapse with bar border
*/
initialPositionForBallX=myBar.x+myBar.width+ballSize;
initialPositionForBallY=myBar.y+(myBar.height/2);


let myBall=new Ball(initialPositionForBallX,initialPositionForBallY,0,0,'black',ballSize);

//TODO a ver por que a veces se ralentiza o acelera, mirar si es cuando a veces movemos la barra o que
// que si la bola choca con la barra pero no es justo en el borde, igual debe rebotar tb
//TODO change ball speed at certain time
//TODO make bar smaller at time wall moves to the left
//TODO always ball must start slow
//TODO intenta poner las variables creadas aqui en variables.js

//global, because we need it increase it on ball.js when ball is <=0
 window.myCounter= new Counter(0,48);

 moveWallToLeft();


/*

    with setInterval, I can do that bar and ball don´t delet if mouse event is not
    fired, that means for example if mouse is not inside the canvas

    timer is set to 0 so it is drawn "instantly"
*/

setInterval(()=>{

    
    myBar.draw();
    myBall.draw();
    myCounter.drawCounter();
    



},0);

/*
    we draw again bar and ball when mouse event,
  
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

           /* console.log( initialPositionForBallX);
            console.log(initialPositionForBallY);*/

            //delete old position, code for it is inside update method
            myBall.update();

            //set new initial positions fot the ball, relative to the bar

            myBall.x=initialPositionForBallX;
            myBall.y=initialPositionForBallY;

           // myBall=new Ball(initialPositionForBallX,initialPositionForBallY,0,0,randomColor(),ballSize);

            myBall.draw();

        }
  
});

/**
 * on this event we will control if it is frist click (with ball glued at bar),
 * in that case we start the loop as well as the intervals to make
 * ball´s speed up increase and make bar size smaller at a certain time rate
 * that time rate must be the same specified for moveWallToTheLeft()
 */
myCanvas.addEventListener("click",(event)=>{
    

    if(myBall.isBallGluedAtBar){

        console.log("pos x al click", myBall.x);
        console.log ("pos y al click", myBall.y);
        console.log("velocidad x al click", myBall.velX);
        console.log ("velocidad y al click", myBall.velY);
        myBall.isBallGluedAtBar=false;

        /*myBall.velX=3;
        myBall.velY=3;
        myBall.update();

        myBall.draw();*/
        
        myBall.loop();

        /*
        at same time interval that wall moves to the left,will increase 
        speedball on X and Y by 0.5
        Note that, as value can be negatives, then we must use a different operation
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

            
           // myBall.velY=parseInt( myBall.velY+2);

            console.log ("upspeedx",myBall.velX);
            console.log ("upspeedy",myBall.velY);


        },5000);


        
        barSizeDownInterval=setInterval(() => {

            //we set a bar minimum to 50
            if(myBar.height>50){

                /*we delete old rectangle with old size, decrease size and then draw new bar*/

                myBar.deleteOldRectangle();
                myBar.height-=25;
                myBar.draw();
                console.log ("barr height",myBar.height);

            }
            
        }, 5000);
        
    }
});


