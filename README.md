# Pacman of war 2021
Pacman clone made with Javascript and HTML, weaponized for CHC CodeWar 2021

🍒🍓🍊🍎🍈👾🔔🔑

## How to run:
* run ./static-server (.exe in windows)
* open the browser to http://localhost:3000

No Installation required (not even NodeJS)
<img src="https://github.com/amitbet/codewar2021/blob/master/ScrShot.png" alt="screen shot" width="200" style="width:200px;"/>
## Rulez:
* Each team will submit two Bot procedures (a pacbot and a ghostbot), you are welcome to challenge yourselfs to a dual, or have friendly competitions to improve your bot abilities.
* Bot code should be completely in JS, no Python/C# allowed (Vanill JS npm modules are ok including TensorflowJS)
* No hacking the game framework, trying to monkeypatch or otherwise change the game engine is not allowed
* a Bot should have adequet performance, it should not take up more than a few milisecs to perform a descision.
* A Full board map is provided below, use it to avoid the walls.
* Have Fun!

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

interested in the originsl ghost AI?
read this:
* https://gameinternals.com/understanding-pac-man-ghost-behavior
* https://dev.to/code2bits/pac-man-patterns--ghost-movement-strategy-pattern-1k1a


Original PacManJS code:
https://github.com/bward2/pacman-js