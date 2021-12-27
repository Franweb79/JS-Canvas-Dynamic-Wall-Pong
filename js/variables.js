/*TODO como puedo pasar esta constante y eso al script.js central 
pa q lo puedan usar todos los modulos
*/

//TODO EN LOS STYLES O DONDE SEA, HACER DINAMICO EL DIBUJO, IGUAL CON UN DIV DETRAS DEL CANVAS
//Y POR ENCIMA DEL BODY, Y TRATARLO DE MANERA DINAMICA SU WIDTH Y BACKGROUNDSIZE CON JAVASCRIPT
const myCanvas = document.getElementById('myCanvas');

const myBackground = document.getElementById('myBackground');

const ctx = myCanvas.getContext('2d');

//TODO mira bien esta mierda del innerwidth diferencias con width a secas

myCanvas.width = window.innerWidth;
myCanvas.height  = window.innerHeight;

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
let initialPositionForBallX=0;
let initialPositionForBallY=0;

console.log (myCanvas.width);
console.log (myBackground.width);
console.log (window.innerHeight);