# pacMan of War Tasklist:

## Basic Bot driving:
1. Add win/lose logic to game over
2. Add winner picutre display to game over logic
3. Play the game and lookout for bugs introduced by bot logic insertion
4. Look at ghost release delay when in ghost-home (it looks like it doesn't work)
5. Think if ghost scatter mode should be controlled by the bot
6. Check if a given ghost-bot move is allowed (check possibleMoves Array) no collision detection there...
7. Create some simple bots and tests things out
- [X] Disable key event handling (arrow keys should not work, only bots)
- [X] Basic bot functions, for controlling both ghosts and pacma
- [X] Remove one ghost from the board
- [X] Add ghost positions to pacbot function calls
- [X] Fix tests, remove failures caused by bot changes
- [X] Connect bot selection and script loading to bot control functions
- [X] Remove fight button, disable start button until bots are selected