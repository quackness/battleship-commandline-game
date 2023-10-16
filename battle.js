//console.log
console.log("Let's play battleship!");
console.log("You have 30 misses to fire to sink all fixe ships.");
const battleBoard = Array.from({ length: 10 }, e => Array(10).fill(" "));
const board = function () {
    console.log("  A B C D E F G H I J")
    let counter = 0;
    for (let i = 0; i < battleBoard.length; i++) {
        let row = '';
        counter++;
        for (let j = 0; j < battleBoard[i].length; j++) {
            //create a visual of each row and print to the screen
            row += battleBoard[i][j] + ' ';
        }
        console.log(`${counter} ${row}`)
    }
}
board();
//read the file
let readlineSync = require('readline-sync');
const fs = require('fs');
let read = fs.readFileSync(__dirname + '/map.txt', 'utf8');

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
// console.log(grid);

//create a game board
// const battleBoard = Array.from({ length: 10 }, e => Array(10).fill(" "));
// console.log("battleBoard", battleBoard);
let misslesLeft = 5;

while (misslesLeft >= 1) {
    //ask for input
    let shoot = readlineSync.question("Choose your target (Ex. A1): ")
    misslesLeft = misslesLeft - 1;
    console.log(`You have ${misslesLeft} missiles left.`);
    // console.log(shoot)


    let coordinates = [];
    // let extractedLetterCoordinate = shoot.charAt(0);
    console.log(coordinates);
    // console.log(shootArray);
    //reverse the input

    //

    // let reversed = coordinates.reverse();
    // console.log("reversed", reversed);
    let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    let extractedNumber = shoot.slice(1);
    // console.log(extractedNumber);
    let numberCoordinates = parseInt(extractedNumber);

    coordinates[0] = numberCoordinates;
    let extractedLetterCoordinate = letters.indexOf(shoot.charAt(0));
    coordinates[1] = extractedLetterCoordinate;
    // console.log(extractedLetterCoordinate);
    // console.log("reversed2", reversed);
    // reversed.splice(1, 1, extractedLetterCoordinate)
    // console.log("fin", reversed);
    // let castTonumber = (Number(reversed[0]));

    // console.log(numberCoordinates);

    // console.log(numberCoordinates - 1);
    // console.log(extractedLetterCoordinate - 1);
    console.log(coordinates[0]);
    console.log(coordinates[1]);
    console.log("after - 1")
    console.log(coordinates[0] - 1);
    console.log(coordinates[1] - 1);


if (grid[coordinates[0] - 1][coordinates[1] - 1] == "1") {
    battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "X";
    board();
} else {
    battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "O";
    board();
}




    //if miss

    // if (grid[i][j] === 0) {
    //     battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "X";
    //     board();
    // } else {
    //     battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "O";
    //     board();
    // }



    // let counter = 0;
    // for (let i = 0; i < battleBoard.length; i++) {
    //     let row = '';
    //     counter++;
    //     for (let j = 0; j < battleBoard[i].length; j++) {
    //         //create a visual of each row and print to the screen
    //         row += battleBoard[i][j] + ' ';
    //     }
    //     console.log(`${counter} ${row}`)
    // }
}
console.log('You have 0 missiles remaining. Game over')










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
// console.log(gameplayGrid2)



