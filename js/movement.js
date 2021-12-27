

export let moveWallToLeft=()=>{
    setInterval(() => {
        if(myCanvas.width>300){
           myCanvas.width=myCanvas.width-100;

        }
    }, 10000);
}



//TODO seems when canvas moves to left, bar disappears a bit, look why

//todo do with modules, why cant properly do global variables with variables.js and why it says movement.js didnt loaded beacuse of mime but it works