## NOTES FOR DEVELOPERS

1 - sometimes we have the bug that ball is "swallowed" by the moving wall.  Only happens with it, the other static walls of canvas work perfect.

Seems it has something to do with the values of velX, coming positive or negative when ball collapses with moving wall. It seems we can solve the bug this way:
- if velX comes being positive when touching moving wall, we make it negative to move on the opposite direction, 
- If for any reason velX comes negative (should not, but happens), 
    we maintain it negative to force it moving to the left. Otherwise ball would dissappear to the right. 


## KNOWN BUGS

- When the ball collapses with the wall in the very same moment it is moving to the left, ball partially disappears before bouncing again to the left