import { moveWallToLeft } from "./movement.js";
import {Bar} from "./bar.js";

moveWallToLeft();

const myBar=new Bar(25,25,25,175);
myBar.draw();

myCanvas.addEventListener("mousemove",(event)=>{
    myBar.deleteOldRectangle();
    myBar.y=event.pageY;//new rectangle will start where pageY
    myBar.draw();
  
});