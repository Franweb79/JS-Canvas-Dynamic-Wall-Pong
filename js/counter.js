
/**
 * initial values of relativeCansdWidth and relativeCanvasHeight
 * will be the total size of canvas. Later values will be changed
 * on drawCounter() method
 */
 let relativeCanvasWidth=myCanvas.width;

 let relativeCanvasHeight=myCanvas.height;

 /**
 * we create a counter class because I need it to be evertytime drawn. Otherwise
 * it is deleted when moveLeftToTheWall() executes, so I can made a draw method
 * 
 */
export class Counter{

  
    /**
     * 
     * @param {*} p_counter 
     * @param {*} p_fontsize 
     */
    constructor(p_counter,p_fontsize){

        this.counter=p_counter;
        this.fontSize=p_fontsize;

    }

    /**
     * will be called on scripts.js, on a seInterval function along
     * with the draw methods for bar and ball objects
     */
    drawCounter(){


        //fontsize declared on variables.js
        ctx.font = `${this.fontSize}px serif`;

        /**
         * to make a cleaner code we store this  operation on a variable.
         * It will be the 20% of the  total width the canvas has each time 
         * wall moves to the left, and I will discount another 10 px to 
         * make distance between canvas border and counter bigger (otherwise it would
         * collapse)
         */
        relativeCanvasWidth = ( (myCanvas.width*20) / 100) - 10;

        /**
         * actually this is not necessary since canvas height should be always the same
         * (this is not a responsive app)
         * but to make a cleaner code is helpful
         */
        relativeCanvasHeight = (myCanvas.height*90) /100;

        //tyo make rect be same color as background
        ctx.fillStyle="#8a2be2";

        /*
        I have calculated manually the position of a background rect 
        to avoid numbers drawn one (-10 to width and -35 to height)
        over another when counter increases 
        but must be a better way to calculate it //TODO this

        width of the rect is 40 because when counter reaches 10 it needs more space to be "hid" previous counter value

        */

        ctx.fillRect(( myCanvas.width - relativeCanvasWidth )-10 , ( myCanvas.height - relativeCanvasHeight )-35, 60,40);

        //we need to change color of context to make font visible again,
        //after painting as pink for the rect

        ctx.fillStyle="black";

        /*-10 to the width, to avoid number hides on the wall when counter is more than 10
        and screen has smaller size (for example, when inspector is opened)
        */

        ctx.fillText( this.counter, ( myCanvas.width -  relativeCanvasWidth ) -10 , ( myCanvas.height - relativeCanvasHeight ) ) ;


    }

    /**
     * needed to delete old value from screen, then print new one with drawCounter()
     */
    updateCounter(){

        myCounter.counter+=1;


    }
}
