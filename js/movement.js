

//TODO seems when canvas moves to left, bar disappears a bit, look why

let moveWallToLeft=()=>{
    setInterval(() => {
        if(myCanvas.width>300){
           myCanvas.width=myCanvas.width-100;

        }
    }, 10000);
}

moveWallToLeft();