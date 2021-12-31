
/**
 * Ball is the class to create a Ball instance
 * @class Ball
 * 
 */
export class Ball{

    //isBallGluedAtBar will by default be true
    constructor(x, y, velX, velY, color, size){

        /**-x and y coordinates — the horizontal and vertical coordinates where the ball starts on the screen. This can range between 0 (top left hand corner) to the width and height of the browser viewport (bottom right hand corner). */
        
        this.x=x;
        /** */
        this.y=y;
        /** -horizontal and vertical velocity (velX and velY) — each ball is given a horizontal and vertical velocity; in real terms these values are regularly added to the x/y coordinate values when we animate the balls, to move them by this much on each frame. */
        this.velX=velX;
        /** */
        this.velY=velY;
        /** -color — each ball gets a color. */
        this.color=color;
        /** -size — each ball gets a size — this is its radius, in pixels. */
        this.size=size;

        this.isBallGluedAtBar=true;
    
    }

    /** 
     * contains the logic to draw a circle, see steps on the code comments 
     * 
     * */
    draw(){

        //First, we use beginPath() to state that we want to draw a shape on the paper.
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath

       

        ctx.beginPath();

        //Next, we use fillStyle to define what color we want the shape to be — we set it to our ball's color property.
        //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

        ctx.fillStyle = this.color;

        
        /** 
            Check notes for developers on readme number 1          
        */

        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        /** 
            Check notes for developers on readme number 2
        */

        ctx.fill();

        
    }


    /** 
     * The first four parts of the update() method check whether the ball has reached the edge 
        of the canvas. If it has, we reverse the polarity of the relevant velocity 
        to make the ball travel in the opposite direction. 
            
        So for example, if the ball was traveling upwards 
        (positive velY), then the vertical velocity 
        is changed so that it starts to travel downwards 
        instead (negative velY).
            
    */
    update(){

        console.log ("la puta barra",myBar);
        //TODO bug, when ball collapses at the same time wall is moving, is disappears for a little while before bouncing. should fix
        
        if((this.x + this.size) >= myCanvas.width) {
            /*
                CHECK READ ME, NOTES FOR DEVELOPERS 1

            
            */
            if(this.velX>0){
                this.velX = -(this.velX);

            }else
            {
                this.velX=this.velX;
            }
            console.log ("al chocar poared delante",(this.x+this.size),myCanvas.width);
            console.log ("velx ",this.velX);
        }

        //TODO  comentar bien esta logica en el read me
       
       if((this.isBallGluedAtBar==false) && (this.velX<0) ){
            if(((this.x - this.size)>0) && ((this.x - this.size)<=(myBar.x + myBar.width))){
                if( ( (this.y - this.size) >= myBar.y ) && ( (this.y - this.size) <= (myBar.y + myBar.height) ) ){
                    this.velX = -(this.velX);

                }
            }
       }
        /* if( (this.isBallGluedAtBar==false) && (this.velX<0) && ((this.x - this.size)>0) && ((this.x-this.size))<=50){

            this.velX = -(this.velX);

        }*/

        if((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
            console.log ("al chocar poared detras",(this.x-this.size),myCanvas.width);
            console.log ("velx ",this.velX);
        }
        if((this.y + this.size) >= myCanvas.height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        //with this, we will be able to paint prior ball position with same background color
        //to mimic its movement
        let XPositionToDelete=this.x;
        let YPositionToDelete=this.y;

        
        
        
        this.x += this.velX;
        this.y += this.velY;

        /*
            In the four cases, we are checking to see:

            if the x coordinate is greater than the width of the canvas (the ball is going off the right edge).
            if the x coordinate is smaller than 0 (the ball is going off the left edge).
            if the y coordinate is greater than the height of the canvas (the ball is going off the bottom edge).
            if the y coordinate is smaller than 0 (the ball is going off the top edge).

            In each case, we include the size of the ball in the calculation because the x/y coordinates are in the center of the ball, but we want the edge of the ball to bounce off the perimeter — we don't want the ball to go halfway off the screen before it starts to bounce back.

            The last two lines add the velX value to the x coordinate, and the velY value to the y coordinate — the ball is in effect moved each time this method is called.

            This will do for now; 

        */
    
        /*
            Now, we will "delete" last position by drawing an arc 
            and painting it the same as background color.
            This time size will be increased to ensure last position arc
            is totally covered. Otherwise "halo" would be visible
            (create the arc with this.size instead of this.size+2 to see)
        */
            ctx.beginPath();


            ctx.fillStyle = myCanvas.backgroundColor;
            //console.log (myCanvas.backgroundColor);
            //ctx.strokeStyle = 'black';
        
            //we delete the last arc by creating another one with more size than original
            //and the same color as background
            ctx.arc(XPositionToDelete, YPositionToDelete, this.size+2, 0, 2 * Math.PI);
               
            ctx.fill();


    }

    loop(){


        /*
         * on first movement, x cant be negative 
         * we need it always go forward
         */

        this.velX=4//randomNumber(1,3);
        this.velY=4//randomNumber(-7,7);
        setInterval(()=>{
            

            this.update();
            this.draw();
        },0);
    }

}

