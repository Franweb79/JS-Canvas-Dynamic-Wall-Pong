


class Bar{

    
    constructor(x,y,width, height){

     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
    
    }

    draw(){

        //First, we use beginPath() to state that we want to draw a shape on the paper.
       
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

const myBar=new Bar(25,25,25,175);
myBar.draw();

myCanvas.addEventListener("mousemove",(event)=>{
    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new rectangle will start where pageY
    myBar.draw();
  
});