//console.log
console.log("Let's play battleship!");
console.log("You have 30 misses to fire to sink all five ships.");
let misslesLeft = 10;
const battleBoard = Array.from({ length: 10 }, e => Array(10).fill(" "));
const board = function (shotResult) {
    if (shotResult !== undefined) {
        console.log(shotResult ? "HIT!!!" : "Miss")
        misslesLeft--;
        console.log(`You have ${misslesLeft} missiles left.`);
    }

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
const { groupEnd } = require('console');
let read = fs.readFileSync(__dirname + '/copy.txt', 'utf8');

//split by \r and \n
let splitReadfile = read.split('\r\n');
let grid = [];
for (let i = 0; i < splitReadfile.length; i++) {
    let mapLine = splitReadfile[i].split(',')
    //create a grid
    grid.push(mapLine);
}

let countX = 0;

for (let h = 0; h < grid.length; h++) {
    for (let o = 0; o < grid[h].length; o++) {
        if (grid[h][o] === "1") {
            countX++;
        }
    }
}

let hit = 0;
let miss = 0;
let shotResult;
let coordinates = [];
let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

while (misslesLeft >= 1) {
    let shoot = readlineSync.question("Choose your target (Ex. A1): ");
    if (shoot === '') {
        console.log("Invalid input")
    } else {
        let extractedNumber = shoot.slice(1);
        let numberCoordinates = parseInt(extractedNumber);

        coordinates[0] = numberCoordinates;
        let extractedLetterCoordinate = letters.indexOf(shoot.charAt(0).toLowerCase());
        coordinates[1] = extractedLetterCoordinate;

        console.log(coordinates);

        if (coordinates[0] > grid.length || coordinates[1] > grid[0].length || coordinates[0] === NaN || coordinates[1] === -1) {
            console.log("Invalid input")
        }
        else if (grid[coordinates[0] - 1][coordinates[1] - 1] == "1") {
            shotResult = true
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "X"
            hit++;
            board(shotResult);
        } else {
            shotResult = false;
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = "O";
            miss++;
            board(shotResult);
        }
        if (hit == countX) {
            console.log(`YOU SANK MY ENTIRE FLEET!\nYou had ${hit} out of ${countX} hits, which sank all the ships.\n You won, congratulations!`);
            break;
        }
    }
}


if (misslesLeft == 0) {
    console.log(`You have 0 missiles remaining.\nGAME OVER.\nYou had ${hit} out of ${countX} hits.\nBetter luck next time.`);
};















