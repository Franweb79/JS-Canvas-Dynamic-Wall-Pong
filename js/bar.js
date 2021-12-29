
export class Bar{

    
    constructor(x,y,width, height){

     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
    
    }

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

    deleteOldRectangle(){
        
        ctx.clearRect(this.x, this.y, this.width, this.height);
      
    }
}

