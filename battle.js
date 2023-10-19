//import chalk
const chalk = require('chalk');

//console.log the intro to the game
console.log("Let's play battleship!");
console.log('You have ' + chalk.underline('30 missles') + ' to fire to sink all five ships.');
console.log(" ");
let misslesLeft = 30;
const battleBoard = Array.from({ length: 10 }, e => Array(10).fill(" "));
const board = function (shotResult) {
    if (shotResult !== undefined) {
        console.log(shotResult ? chalk.green('HIT!!!') : chalk.red('Miss'))
        misslesLeft--;
        console.log(`You have ${misslesLeft} missiles left.`);
    }

    console.log(chalk.bold.blue("  A B C D E F G H I J"));
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
    console.log("");
}
board();
//read the file
let readlineSync = require('readline-sync');
const fs = require('fs');
let read = fs.readFileSync(__dirname + '/map.txt', 'utf8');

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
    if (shoot === '' || shoot.length === 1 || shoot.length > 3) {
        console.log("Invalid input")
    } else {
        let extractedNumber = shoot.slice(1);
        let numberCoordinates = parseInt(extractedNumber);

        coordinates[0] = numberCoordinates;
        let extractedLetterCoordinate = letters.indexOf(shoot.charAt(0).toLowerCase());
        coordinates[1] = extractedLetterCoordinate;

        if (coordinates[0] > grid.length || coordinates[1] > grid[0].length || isNaN(numberCoordinates) || coordinates[1] === -1 ) {
            console.log("Invalid input")
        }
        else if (grid[coordinates[0] - 1][coordinates[1] - 1] == "1") {
            shotResult = true
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = chalk.bgGreen("X")
            hit++;
            board(shotResult);
        } else {
            shotResult = false;
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = chalk.red("O");
            miss++;
            board(shotResult);
        }
        if (hit == countX) {
            console.log(`YOU SANK MY ENTIRE FLEET!\nYou had ${hit} out of ${countX} hits, which sank all the ships.\nYou won, congratulations!`);
            break;
        }
    }
}


if (misslesLeft == 0) {
    console.log(`You have 0 missiles remaining.\nGAME OVER.\nYou had ${hit} out of ${countX} hits, but did not sink all the ships.\nBetter luck next time.`);
};















