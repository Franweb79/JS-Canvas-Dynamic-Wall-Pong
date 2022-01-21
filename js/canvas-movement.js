
export let moveWallToLeft=()=>{
    setInterval(() => {
        if(myCanvas.width>300){
           myCanvas.width=myCanvas.width-100;
            //console.log (myCanvas.width);
        }else{
            //console.log ("ya es menos de 300",myCanvas.width)
        }
    }, 5000);
}




//todo do with modules, why cant properly do global variables with variables.js and why it says movement.js didnt loaded beacuse of mime but it works