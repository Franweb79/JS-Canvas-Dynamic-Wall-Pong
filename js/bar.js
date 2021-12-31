
/**
 * Bar is the call used to create the bar or cursor. The object will be instantiated
 * as global with the window object on the scripts.js because we need it to be accesible to all
 * the other modules
 */

export class Bar{

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     */
    constructor(x,y,width, height){

    /**
     * -x and y coordinates — the horizontal and vertical coordinates where the ball starts on the screen. This can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner). 
     */
     this.x=x;
     /** */
     this.y=y;
     /** width of the bar*/
     this.width=width;
     /**height of the bar */
     this.height=height;
    
    }

    /**
     * method used to draw the bar
     */
    draw(){

        //First, we use beginPath() to state that we want to draw a shape on the paper.
       console.log ("barra",(this.x+this.width));
        ctx.beginPath();

       
        ctx.fillStyle = "red";

        //this will prevent bar from trespassing bottom of the canvas
        if(this.y > (myCanvas.height - this.height)){
            this.y = myCanvas.height - this.height;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
    /**
     * This will be used to delete the old position when we move the bar
     */

    deleteOldRectangle(){
        
        ctx.clearRect(this.x, this.y, this.width, this.height);
      
    }
}

