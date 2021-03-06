
/**
 * Ball is the class to create a Ball instance
 * 
 * 
 */
export class Ball{


    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} velX 
     * @param {*} velY 
     * @param {*} color 
     * @param {*} size 
     */
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

        /**
         *  will control if ball has started bouncing or not (user pressed click 
         * to start the game), by default will be true
         */
        this.isBallGluedAtBar=true;
    
    }

    /** 
     * contains the logic to draw a circle, see steps on the code comments 
     * 
     * */
    draw(){

        /*
            First, we use beginPath() to state that we want to draw a shape on the paper.
            https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath

            
        */
        ctx.beginPath();

        /*
            Next, we use fillStyle to define what color we want the shape to be — 
            we set it with our ball's color property.
            https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

        */
        ctx.fillStyle = this.color;

        
        /** 
            we create a ball shape
            
            https://www.w3schools.com/tags/canvas_arc.asp
        */
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        /** 
            with fill(), we draw the ball on the canvas
        */
        ctx.fill();

        
    }


    /** 
     * The first four parts of the following update() method check whether the ball has reached 
     * the edge of the canvas. If it has, we reverse the polarity of the relevant velocity 
       to make the ball travel in the opposite direction. 
            
       So for example, if the ball was traveling upwards (positive velY), 
       then the vertical velocity is changed so that it starts to travel downwards 
       instead (negative velY).
            
    */
    update(){

        
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
           
            console.log ("velx ",this.velX);
        }

       
        /* 
           
            CHECK READ ME, NOTES FOR DEVELOPERS 2
        
        
        */
       if((this.isBallGluedAtBar==false) && (this.velX<0) ){
            if(((this.x - this.size)>0) && ((this.x - this.size)<=(myBar.x + myBar.width))){
                if( ( (this.y - this.size) >= myBar.y ) && ( (this.y - this.size) <= (myBar.y + myBar.height) ) ){
                    
                    this.velX = -(this.velX);

                    myCounter.updateCounter();

                }
            }
        }

        /*
            this logic is used when user can´t get the ball with the bar ("goal").

            Ball speed will be restored, also bar will recover its original size
        */ 
        if((this.x - this.size) <= 0) {

           /*
                CHECK READ ME, NOTES FOR DEVELOPERS 3

           */
           clearInterval(loopInterval);

           //we also clear the speedUpInterval and barSizeDownInterval
           clearInterval(speedUpInterval);
           clearInterval(barSizeDownInterval);

           /*
            
                to restore original size, once we have clear the barSizeDownInterval,
                we must delete old bar, and restore original size and draw it again

            */
           myBar.deleteOldRectangle();
           myBar.height=175;
           myBar.draw();

           /*
                store current position values of the ball
                to delete it after this.x and this.y are set to default 
                on following steps
                (default means glued to the bar on the middle of it, to start the game again)
           */
           XPositionToDelete=this.x;
           YPositionToDelete=this.y;

           //set values of ball object to default
           this.x=myBar.x+myBar.width+this.size;

           this.y=myBar.y+(myBar.height/2) ;

           this.velX=0;

           this.velY=0;

           this.isBallGluedAtBar=true;

           ctx.beginPath();

        
           /*
                following steps will fill with canvas background color the last position
                of the ball to "delete" it. 
                Notice size will be bigger to avoid trail of the old ball

            */
           ctx.fillStyle = myCanvas.backgroundColor;

           ctx.arc(XPositionToDelete, YPositionToDelete, this.size+2, 0, 2 * Math.PI);
               
           ctx.fill();

           //also we restart counter to 0
           myCounter.restartCounter();
   
            
        }

        //this is used to bounce ball when it reaches top or bottom of canvas
        if((this.y + this.size) >= myCanvas.height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        /*
           CHECK READ ME, NOTES FOR DEVELOPERS 4

        */
        XPositionToDelete=this.x;
        YPositionToDelete=this.y;

        
        this.x += this.velX;
        this.y += this.velY;

    
        /*
            Now, we will "delete" last position by drawing an arc 
            and painting it the same as background color.
            This time size will be increased to ensure last position arc
            is totally covered. Otherwise "halo" would be visible
            (create the arc with this.size instead of this.size+2 to see)
        */
            ctx.beginPath();


            ctx.fillStyle = myCanvas.backgroundColor;
           
        
        /*
            we delete the last arc by creating another one with more size than original
            and the same color as background
        */
            ctx.arc(XPositionToDelete, YPositionToDelete, this.size+2, 0, 2 * Math.PI);
               
            ctx.fill();



    }

    /**
     * will be called inside the "click" event listener inside scripts.js
     */
    loop(){


        /*
         * on first movement, x cant be negative 
         * we need it always go forward
         */
        this.velX=2;
        this.velY=2;

        /*
            As explained above on the goal logic, each time we have a goal,
            this loopInterval will be cleared.
            Otherwise ball goes each time faster.
            Cleaning this interval we ensure everything is like at the beginning.

            As the main setInterval on scripts.js, number value set to 15 (see reason 
            on comments for that interval)
            
        */
        loopInterval=setInterval(()=>{
            

            this.update();
            this.draw();
        },15);
    }

   
    
}

