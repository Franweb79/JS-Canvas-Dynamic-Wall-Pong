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
 //TODO recorta la foto para que la L no haya espacios con la pared del canvas
myBackground.style.width=(window.innerWidth).toString()+"px";
myBackground.style.height=window.innerHeight.toString()+"px";
myBackground.style.backgroundImage= "url('../assets/img/limits.png')";
myBackground.style.backgroundSize= "80% 100%";
myBackground.style.backgroundRepeat="no-repeat";
myBackground.style.display="inline-block";
myBackground.style.position="absolute";




console.log (myCanvas.width);
console.log (myBackground.width);
console.log (window.innerHeight);