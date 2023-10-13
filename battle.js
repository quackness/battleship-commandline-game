//console.log
console.log("Let's play battleship!");
console.log("You have 30 misses to fire to sink all fixe ships.");

//read the file
let readlineSync = require('readline-sync');
const fs = require('fs');
let read = fs.readFileSync(__dirname + '/map.txt', 'utf8');
console.log("raw file", read);

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
const battleBoard = Array.from({length: 10}, e => Array(10).fill(" "));
console.log("battleBoard", battleBoard);
//ask for input
let shoot = readlineSync.question("Choose your target (Ex. A1): ")
// console.log(shoot)
let coordinates = shoot.split('');
// console.log(coordinates);
// console.log(shootArray);
//reverse the input
let reversed = coordinates.reverse();
console.log("reversed", reversed);
let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let extractedLetterCoordinate = letters.indexOf(reversed[1]);
console.log(extractedLetterCoordinate);
console.log("reversed2", reversed);
reversed.splice(1, 1, extractedLetterCoordinate)
console.log("fin", reversed);
let castTonumber = (Number(reversed[0]));
reversed.splice(0, 1, castTonumber)
console.log(reversed);

for(let i = 0; i<battleBoard.length; i++){
    let row = '';
    for(let j=0; j<battleBoard[i].length; j++){
        //create a visual of each row and print to the screen
        if (battleBoard[i][j] != " ") {
            row += battleBoard[i][j] + ' '
        } else {
            row += ' _ '
        }
    }
    console.log(row)
}





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



