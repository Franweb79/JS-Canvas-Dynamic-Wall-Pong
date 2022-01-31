## NOTES FOR DEVELOPERS

1 - sometimes we have the bug that ball is "swallowed" by the moving wall. Only happens with moving wall; the other static walls of canvas work perfect.

Seems it has something to do with the values of velX, coming positive or negative when ball collapses with moving wall. It seems we can solve the bug this way:
- if velX comes being positive when touching moving wall, we make it negative to move on the opposite direction, 
- If for any reason velX comes negative (should not, but happens), 
    we maintain it negative to force it moving to the left. Otherwise ball would dissappear to the right. 


2 - following logic is used to control the ball correctly bouncing on the bar.
- If ball touches the bar, then velX will turn negative to make it go 
the opposite direction. As it comes as a negative value, we make it positive.

    eg. if velX is -2 (because it comes from the right to the left after bouncing with the wall),it will turn 2, so it will move from left to right.

- Also points are increased by 1.


3 - as explained on the loop() method, we have to clear the interval inside loop() when we have a goal, this way we prevent the update() and draw() methods inside loop() from keeping on being executed, and we ensure that we have the same behavior as when ball is clicked for the first time.
                
Otherwise the ball starts going each time faster, maybe because that update() and draw() inside the loop() causes ball being updated and drawn more times?


4 - following code is very similar to the one used above when we have a "goal" to paint prior ball position with same background color and "delete" it.

Diffence here is now we also must do

    this.x += this.velX;
    this.y += this.velY;

That is done to mimic the ball movement through the canvas, something we don´t need when we have a goal

//TODO this could be refactored possibly

5 - position of the counter will be stored on theses 2 variables

    relativeCanvasWidth. It will be the 20% of the  total width the canvas has each time wall moves to the left, and I will discount another 10 px to make distance between canvas border and counter bigger (otherwise it would collapse)

    and

    relativeCanvasHeight. actually this is not necessary since canvas height should be always the same (this is not a responsive app) but to make a cleaner code is helpful

6 -  I have calculated manually the position of a background rect to avoid numbers drawn one over another when counter increases. It is set to (-60 to width and -35 to height), but must be a better way to calculate it //TODO this.

Width of the rect is 100 because when counter reaches 100 ( 3 numbers length) it needs more space to "hid" previous counter value
       

7 - We declare myBar as a global variable with the 'window' keyword. Using export to make it available on other modules would give problems. myBar is declared on scripts.js, that means it is done after the definition of the Ball class on ball.js (ball.js is before on the script loading queue on index.html), which on its update() method needs a reference to myBar and otherwise would be harder to have that reference. I find for now this is the easiest way to solve it

8 -  variables for initial X and Y positions for the ball will be declared  here because it is easier. As we also have to access bar's x and y positions to calculate that initial ball position, maybe it is better to do here than declaring those initial positions as ball object´s properties

9 - this speedUpInterval will be used inside scripts.js, on the click event, to set an interval of same time interval as the wall moving to the left (e.g if moveWallToTheLeft() has an interval rate of 5000ms, this interval will have also 5000ms). 
As the other variables used to store intervals later, and as setInterval is a function (a method of the window object actually), we initialize as an empty function to avoid the bad practice of not initializing variables

## KNOWN BUGS

- As eplained at NOTES FOR DEVELOPERS NUMBER 1, When the ball collapses with the wall in the very same moment it is moving to the left, ball partially disappears before bouncing again to the left

- When ball is behind marker, it hides behind the rect we created to do the counter.

- Sometimes when I move the bar, the ball´s speed changes, should not do