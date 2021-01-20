# Pacman of war 2021
Pᗣᗧ•••MᗣN clone made with Javascript and HTML, weaponized for CHC CodeWar 2021

🍒🍓🍊🍎🍈👾🔔🔑

## How to run:
* run ./static-server (.exe in windows)
* open the browser to http://localhost:3000

No Installation required (not even NodeJS)

<img src="https://github.com/amitbet/codewar2021/blob/master/ScrShot.png" alt="screen shot" width="300" style="width:200px;"/>

---
## Rulez:
* Each team will submit two Bot procedures (a pacbot and a ghostbot), you are welcome to challenge yourself to a duel, or have friendly competitions to improve your bot abilities.
* Bot code should be completely in JS, no Python/C# allowed (Vanilla JS npm modules are ok, including TensorflowJS)
* No hacking the game framework, trying to monkeypatch or otherwise change the game engine is not allowed
* A Bot should have adequate performance, it should not take up more than a few milliseconds to perform a decision.
* A Full board map is provided below, use it to avoid the walls.
* Have Fun!
---
## Gameplay:
* The groups should submit the bots (both ghost and  pacman) a week before the tournament.
* The tournament structure & each group’s positioning will be determined randomly and published
### Preperation: 
The tournament-master of the region will:
  * Collect bots from all teams
  * Build the list of bots
  * Code review the bots 
  * Conduct a dry run to check for abnormal game behavior or cheats

### The tournament:
* The tournament will have 2 stages: Regionals and Final, The Regionals will be conducted locally, and winners will continue to participate in the Final stage.
* On the day of the event tournament-master will run the competition on his machine or a dedicated machine while live streaming.

### 1x1 Rounds:
Each X vs Y round will run like this:
* 3 rounds will be played (randomized choices are encouraged to produce interesting patterns)
* Each round will run until Pacman dies or the time is up
* Each round will record Pacman’s points and the ghosts catch time (if they catch Pacman)
* Best out of 3 wins, (points are recorded manually as tie-breakers)
* At the end there is a tournament winner
Best amongst Ghosts & Best Pacman may also be chosen according to points/times
---

## BoardMap:
```
this.mazeArray = [
      
    ['XXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
    ['XooooooooooooXXooooooooooooX'],
    ['XoXXXXoXXXXXoXXoXXXXXoXXXXoX'],
    ['XOXXXXoXXXXXoXXoXXXXXoXXXXOX'],
    ['XoXXXXoXXXXXoXXoXXXXXoXXXXoX'],
    ['XooooooooooooooooooooooooooX'],
    ['XoXXXXoXXoXXXXXXXXoXXoXXXXoX'],
    ['XoXXXXoXXoXXXXXXXXoXXoXXXXoX'],
    ['XooooooXXooooXXooooXXooooooX'],
    ['XXXXXXoXXXXX XX XXXXXoXXXXXX'],
    ['XXXXXXoXXXXX XX XXXXXoXXXXXX'],
    ['XXXXXXoXX          XXoXXXXXX'],
    ['XXXXXXoXX XXXXXXXX XXoXXXXXX'],
    ['XXXXXXoXX X      X XXoXXXXXX'],
    ['      o   X      X   o      '],
    ['XXXXXXoXX X      X XXoXXXXXX'],
    ['XXXXXXoXX XXXXXXXX XXoXXXXXX'],
    ['XXXXXXoXX          XXoXXXXXX'],
    ['XXXXXXoXX XXXXXXXX XXoXXXXXX'],
    ['XXXXXXoXX XXXXXXXX XXoXXXXXX'],
    ['XooooooooooooXXooooooooooooX'],
    ['XoXXXXoXXXXXoXXoXXXXXoXXXXoX'],
    ['XoXXXXoXXXXXoXXoXXXXXoXXXXoX'],
    ['XOooXXooooooo  oooooooXXooOX'],
    ['XXXoXXoXXoXXXXXXXXoXXoXXoXXX'],
    ['XXXoXXoXXoXXXXXXXXoXXoXXoXXX'],
    ['XooooooXXooooXXooooXXooooooX'],
    ['XoXXXXXXXXXXoXXoXXXXXXXXXXoX'],
    ['XoXXXXXXXXXXoXXoXXXXXXXXXXoX'],
    ['XooooooooooooooooooooooooooX'],
    ['XXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
];
```
---
## Links:
Interested in the original ghost AI?
read this:
* https://gameinternals.com/understanding-pac-man-ghost-behavior
* https://dev.to/code2bits/pac-man-patterns--ghost-movement-strategy-pattern-1k1a


Original PacManJS code:
https://github.com/bward2/pacman-js
