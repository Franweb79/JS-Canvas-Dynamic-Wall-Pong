
let myLink=document.getElementById("linkFranPrieto");

/**
 * 
 * myCanvas in this case can´t be declared as 'const' because canvas will change size
 * due to the use of moveWallToLeft() method
 * 
 **/
let myCanvas = document.getElementById('myCanvas');

/**
 * relativeCanvasWidth and relativeCanvasHeight
 * 
 * These variables will be used to store the counter
 * position later on counter.js inside drawCounter() method
 * 
 * initial values of relativeCansdWidth and relativeCanvasHeight
 * will be the total size of canvas. Later values will be changed
 * on drawCounter() method, as said.
 */
 let relativeCanvasWidth=myCanvas.width;

 /** */
 let relativeCanvasHeight=myCanvas.height;


/**
 * myBackground had to be absolute positioned to make it work,
 * it is where the picture with the man pushing the canvas is drawn
 */
let myBackground = document.getElementById('myBackground');


/**
 * ctx is the context of the canvas. It will be 2d context
 */
const ctx = myCanvas.getContext('2d');

/* canvas width and height will initially be the browser window width and height, that means,
only the window*/
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height  = window.innerHeight;


myCanvas.backgroundColor="#8a2be2";


/*
    set size and other attributes of the background div 
    where draw of man pushing the wall is located
*/
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

/**
    ballSize (size is radius), must be added to the calculation of ball 
    initialPositionForBallX and initialPositionForBallY to make ball collapse with bar border
*/
const ballSize=10;

/*
    CHECK README NOTES FOR DEVELOPERS NUMBER 8
    
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
 * to delete prior X position of the ball
 */
let XPositionToDelete=0;

/**
 *   to delete prior Y position of the ball
 */
let YPositionToDelete=0;

/**
 * this loop will be called inside ball.js loop() method, and it will update
 * ball status and draw it again constantly
 */
let loopInterval=function(){};

/*
 * CHECK README NOTES FOR DEVELOPERS NUMBER 9
 */

/**
 * Will be cleaned with clearInterval when user can´t get the ball
 */
let speedUpInterval=function(){};

/**
 * used in scripts.js on the click event to make bar smaller at certain time interval
 * Will be cleaned with clearInterval when user can´t get the ball

 */
let barSizeDownInterval=function(){};


