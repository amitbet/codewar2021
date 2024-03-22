# Pacman of war 2021
Pᗣᗧ•••MᗣN clone made with Javascript and HTML, weaponized for CodeWar 2021

🍒🍓🍊🍎🍈👾🔔🔑

## How to run:
* run ./static-server (.exe in windows)
* open the browser to http://localhost:3000
No Installation required (not even NodeJS)

### using different ports:
* ./static-server -p 54321

<img src="https://github.com/amitbet/codewar2021/blob/master/ScrShot.png" alt="screen shot" style="width:700px;"/>

---
## Rulez:
* Bot code should be completely in JS, no Python/C# allowed (Vanilla JS npm modules are ok, including TensorflowJS)
* No hacking the game framework, trying to monkeypatch or otherwise change the game engine is not allowed
* A Bot should have adequate performance, it should not take up more than a few milliseconds to perform a decision.
* A Full board map is provided below, use it to avoid the walls.
* Have Fun!
---
## Registration & Submission:
### Registration:
* On registeration please provide a **team name**, and a **member list** 
* Teams can consist of 1-6 people but 2-4 is recommended (+not every member has to code, QA & Strategy members can be included as well)
* Registration dates will be advertised on competition announcement 

### Submission:
* Each team will submit two Bot procedures (a pacbot and a ghostbot), you are welcome to challenge yourself to a duel, or have friendly competitions to improve your bot abilities. **Sample bots can be found in the ./bots directory**
* A team Icon should be chosen to be displayed on screen - this can be chosen from the existing images in the repo, or a custom image can be submitted in jpeg and png formats. If no icon is chosen one would be assigned to you at random.

---
## Gameplay:
* The groups should submit the bots (both ghost and  pacman) a week before the tournament.
* The tournament structure & each group’s positioning will be determined randomly and published

### Preperation: 
The tournament-master of the region will:
  * Collect bots from all teams
  * Collect any custom Team Icons from teams
  * Build the list of bots
  * Code review the bots 
  * Conduct a dry run to check for abnormal game behavior or cheats

### The tournament:
* The tournament will have 2 stages: Regionals and Final, The Regionals will be conducted locally, and winners will continue to participate in the Final stage.
* On the day of the event tournament-master will run the competition on his machine or a dedicated machine while live streaming.

### 1x1 Matches:
Each X vs Y match will consist of 3 rounds (lives) in each role (6 rounds in total):
* Each round will run until Pacman dies or the time is up
* Each round will record Pacman’s points and the ghosts catch time (if they catch Pacman)
* Best out of 3 wins the match, (points are recorded manually for later)
* The roles are Reversed after 3 rounds (Y becomes pacman instead of X)
* If there is a win for each bot, **pacman** scores will decide the outcome
* At the end there is a Tournament Winner, Best Ghosts & Best Pacman that are chosen according to points/times
  
### Tips:
* Randomized bot choices are encouraged to produce interesting patterns
* Game parameters like round runtime and capsule effect length may be adjusted before the final competition

### Scores:
* The Pacman score is the points he earns from munching on dots
* The Ghosts score is the time left on the clock when they catch pacman
* The game server logs the total score for the whole match
* Pacman and Ghost scores are not comaprable, so the only comparisons done will be P<=>P or G<=>G
* Scores are meant as tie breakers and for Ghost/Pacman leader boards
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
