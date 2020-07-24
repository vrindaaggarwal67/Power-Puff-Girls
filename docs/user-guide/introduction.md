# Introduction

PathFinding.js is a javascript library to find paths on a 2D square grid. It
works in both node.js and browser environments.

```javascript
//Walkability matrix. Zero is walkable, One is not
var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);
var finder = new PF.AStarFinder();
//Find path from (1, 2) to (4, 2)
var path = finder.findPath(1, 2, 4, 2, grid);
```

## Getting Help

If you stumble upon a bug or don't understand some feature of PathFinding.js,
open an issue in the 
[Issue Tracker](https://github.com/vrindaaggarwal67/Power-Puff-Girls/issues).

Browsing the [source](https://github.com/vrindaaggarwal67/Power-Puff-Girls) might also help.
A great visualization of the different pathfinding algorithms is available
[here](https://github.com/vrindaaggarwal67/Power-Puff-Girls/visual/).
