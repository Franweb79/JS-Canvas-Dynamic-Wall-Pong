/*TODO como puedo pasar esta constante y eso al script.js central 
pa q lo puedan usar todos los modulos
*/
const myCanvas = document.getElementById('myCanvas');


const ctx = myCanvas.getContext('2d');


//will set width to half canvas to avoid stress moving the bar
const width = myCanvas.width = window.innerWidth;
const height = myCanvas.height = window.innerHeight;