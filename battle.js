//console.log
console.log("Let's play battleship!");
console.log("You have 30 misses to fire to sink all fixe ships.");

//read the file
var readlineSync = require('readline-sync');
const fs = require('fs');
let read = fs.readFileSync(__dirname + '/map.txt', 'utf8');
console.log(read);
//create a grid, an outline should be letters and numbers
//inner grid inside should be the file content
//ask the user for target
//verify if the ship is there
//deduct from the shots
//dipslay the message

const gameplayGrid = [[null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null],
                      [null,null,null,null,null,null,null,null,null,null]]

const gameplayGrid2 = [].fill([].fill('A', 10), 10)

console.log(gameplayGrid2)

const lettersUpped = [' ','A','B','C','D','E','F','G','H','I','J'];
// const lettersUpped = " ,A,B,C,D,E,F,G,H,I,J";
const numbers = [' ',1,2,3,4,5,6,7,8,9,10]
// let letters = '';
// console.log(lettersUpped.split(','));
let grid = [];
for (let i = 0; i < numbers.length; i++ ) {
    grid.push(numbers[i])
    console.log(numbers[i]);
    for (let j = 0; j < lettersUpped.length; j++) {
        // console.log(lettersUpped[i]);
        grid.push(lettersUpped[j])
    }
};
console.log(grid);


