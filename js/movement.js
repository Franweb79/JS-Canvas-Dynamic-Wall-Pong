const myCanvas = document.getElementById('myCanvas');


const ctx = myCanvas.getContext('2d');

const width = myCanvas.width = (window.innerWidth);
const height = myCanvas.height = window.innerHeight;



export let moveWallToLeft=()=>{
    setInterval(() => {
        if(myCanvas.width>300){
           myCanvas.width=myCanvas.width-100;

        }
    }, 1000);
}

moveWallToLeft();