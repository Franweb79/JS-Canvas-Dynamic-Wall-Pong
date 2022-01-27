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

xxx - We declare myBar as a global variable with the 'window' keyword. Using export to make it available on other modules would give problems. For example myBar is declared on scripts.js, that means it is done after the definition of the Ball class on ball.js, which on its update() method needs a reference to myBar and otherwise would be harder to have that reference. I find for now this is the easiest way to solve it

## KNOWN BUGS

- As eplained at NOTES FOR DEVELOPERS NUMBER 1, When the ball collapses with the wall in the very same moment it is moving to the left, ball partially disappears before bouncing again to the left

- When ball is behind marker, it hides behind the rect we created to do the counter.

- Sometimes when I move the bar, the ball´s speed changes, should not do