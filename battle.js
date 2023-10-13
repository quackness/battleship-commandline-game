//console.log
console.log("Let's play battleship!");
console.log("You have 30 misses to fire to sink all fixe ships.");

//read the file
let readlineSync = require('readline-sync');
const fs = require('fs');
let read = fs.readFileSync(__dirname + '/map.txt', 'utf8');
console.log("raw file", read);
//create a grid, an outline should be letters and numbers
//inner grid inside should be the file content
//ask the user for target
//verify if the ship is there
//deduct from the shots
//dipslay the message

//split by \r and \n
 let splitReadfile = read.split('\r\n');
//  console.log("split", splitReadfile);
 let grid = [];
 for (let i = 0; i < splitReadfile.length; i++) {
    // console.log(splitReadfile[i])
    let mapLine = splitReadfile[i].split(',')
    //create a grid
    grid.push(mapLine);
 }
 console.log(grid);

//create a game board
const battleBoard = Array.from({length: 10}, e => Array(10).fill(null));
console.log("battleBoard", battleBoard);
//ask for input
let shoot = readlineSync.question("Choose your target (Ex. A1): ")
console.log(shoot)
let coordinates = shoot.split('');
console.log(coordinates);
// console.log(shootArray);
//reverse the input
let reversed = coordinates.reverse();
console.log(reversed);





// const gameplayGrid = [[null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null],
//                       [null,null,null,null,null,null,null,null,null,null]]

// const gameplayGrid2 = [].fill([].fill('A', 10), 10)

// console.log(gameplayGrid2)



