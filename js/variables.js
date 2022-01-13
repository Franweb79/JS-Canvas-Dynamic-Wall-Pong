

/**
 * 
 * myCanvas in this case can´t be const because it will change size
 * because of moveWallToLeft() method
 * 
 **/

let myCanvas = document.getElementById('myCanvas');


/**
 * myBackground had to be absolute positioned to make it work,
 * it is where the picture is drawn
 */
let myBackground = document.getElementById('myBackground');

const myAudio=document.getElementById("myAudio");

/**
 * ctx is the context of the canvas. It will be 2d context
 */

const ctx = myCanvas.getContext('2d');

//TODO mira bien esta mierda del innerwidth diferencias con width a secas

let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height  = window.innerHeight;

//TODO WHY THIS ONYL WORKS WHEN EVENT MOUSE IS FIRED, AND ONLY PAINT A BIT, NOT THE WHOLE
//I HAD ALSO TO SET BACK GROUND COLOR ON THE STYLES, MAYBE IT IS STILL NOT LOADED WHEN IS SHOWN?
myCanvas.backgroundColor="#8a2be2";


 //TODO apunta que aqui hace falta .style.width y con el canvas no, y que tuve que poner absolute
 //TODO MARCADOR https://stackoverflow.com/questions/26802908/display-the-numbers-of-an-array-on-html5-canvas
myBackground.style.width=(window.innerWidth).toString()+"px";
myBackground.style.height=window.innerHeight.toString()+"px";
myBackground.style.backgroundImage= "url('../assets/img/limits-no-3.png')";
myBackground.style.backgroundSize= "80% 100%";
myBackground.style.backgroundRepeat="no-repeat";
myBackground.style.display="inline-block";
myBackground.style.position="absolute";

/** function to generate random number 
 * @returns a random number
 * */ 

let randomNumber = (min, max)=> {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


/**
 * randomColor() method will create a random rgb color
 * @returns an rgb color string
 */
let randomColor=()=>{

    let color=`rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;


    return color;   

}

/*
    initial position for ball will be done here because is easier,
    we have to access bar's x and y positions to calculate so maybe
    is better to do here than declaring them as ball object´s properties

    //TODO maybe can be done as property and bar accesses that property
*/

/**
 * this is the variable to store initial X position of the ball (glued to the bar)
 */
let initialPositionForBallX=0;
/**
 * this is the variable to store initial Y position of the ball (glued to the bar)
 */
let initialPositionForBallY=0;

/**
 * to delete prior position of the ball
 */
let XPositionToDelete=0;
let YPositionToDelete=0;




