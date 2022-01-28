


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


        ctx.font = `${this.fontSize}px serif`;
        
        /*
            CHECK README NOTES FOR DEVELOPERS NUMBER 5
        */
        
        relativeCanvasWidth = ( (myCanvas.width*20) / 100) - 10;

        /*
            CHECK README NOTES FOR DEVELOPERS NUMBER 5
         */
        relativeCanvasHeight = (myCanvas.height*90) /100;

        /*
            this will be the background color of a rect 
           where counter will be. background color will be same as canvas one

        */
        ctx.fillStyle="#8a2be2";

        /*

            CHECK README NOTES FOR DEVELOPERS NUMBER 6

       

        */

        ctx.fillRect(( myCanvas.width - relativeCanvasWidth )-60 , ( myCanvas.height - relativeCanvasHeight )-35, 100,40);

        /*
            we need to change color of context to make font visible again,
            after painting as pink for the rect
        */

        ctx.fillStyle="black";

        /*
            -60 to the width, to avoid number hides on the wall when counter is more than 100
            and screen has smaller size (for example, when browser inspector is opened)
        */

        ctx.fillText( this.counter, ( myCanvas.width -  relativeCanvasWidth ) -60 , ( myCanvas.height - relativeCanvasHeight ) ) ;


    }

    /**
     * needed to delete old value from screen, then print new one with drawCounter()
     */
    updateCounter(){

        myCounter.counter+=1;


    }

    /**
     * will be used when user fails to catch the ball with the bar
     */
    restartCounter(){
        myCounter.counter=0;
    }
}
