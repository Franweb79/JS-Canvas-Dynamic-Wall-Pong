## NOTES FOR DEVELOPERS
//TODO check this if bugs are still or fixed
1 - sometimes we have the bug that ball is "swallowed" by the moving wall.  Only happens with it, the other static walls of canvas work perfect.

Seems it has something to do with the values of velX, coming positive or negative when ball collapses with moving wall. It seems we can solve the bug this way:
- if velX comes being positive when touching moving wall, we make it negative to move on the opposite direction, 
- If for any reason velX comes negative (should not, but happens), 
    we maintain it negative to force it moving to the left. Otherwise ball would dissappear to the right. 

2- We declare myBar as a global variable with the 'window' keyword. Using export to make it available on other modules would give problems. For example myBar is declared on scripts.js, that means it is done after the definition of the Ball class on ball.js, which on its update() method needs a reference to myBar and otherwise would be harder to have that reference. I find for now this is the easiest way to solve it

## KNOWN BUGS

- When the ball collapses with the wall in the very same moment it is moving to the left, ball partially disappears before bouncing again to the left

- When ball is behind marker, it hides behind the rect we created to do the counter.

- Sometimes when I move the bar, the ball´s speed changes, should not do