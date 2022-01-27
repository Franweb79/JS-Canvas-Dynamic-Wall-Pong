
/**
 * if width of the canvas (violet background) is more than 300,
 * each certain interval we move the right side to show a draw.
 * Effect is if like someone was pushing the wall to the left
 */
export let moveWallToLeft=()=>{
    setInterval(() => {
        if(myCanvas.width>300){
           myCanvas.width=myCanvas.width-100;
           
        }
    }, 5000);
}




