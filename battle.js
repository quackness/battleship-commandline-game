//import chalk to colour the game
const chalk = require('chalk');

//console.log the intro
console.log("Let's play battleship!");
console.log('You have ' + chalk.underline('30 missles') + ' to fire to sink all five ships.');
console.log(" ");

//initiiaze the amount of missiles
let missilesLeft = 30;
//create a board game array
const battleBoard = Array.from({ length: 10 }, e => Array(10).fill(" "));
//declare a function which displays the board, handle Hit and Miss alerts, deduct the amunt of missiles and count the hits
const displayBoard = function (shotResult) {
    if (shotResult !== undefined) {
        console.log(shotResult ? chalk.green('HIT!!!') : chalk.red('Miss'))
        missilesLeft--;
        console.log(`You have ${missilesLeft} missiles left.`);
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
displayBoard();
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
};
//count the X, as a ship, in the grid
let countX = 0;
for (let h = 0; h < grid.length; h++) {
    for (let o = 0; o < grid[h].length; o++) {
        if (grid[h][o] === "1") {
            countX++;
        }
    }
};
//initialize hits, misses, cordinates aray and shotesults
let hit = 0;
let miss = 0;
let shotResult;
let coordinates = [];
let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//loop as long as you have missiles left
while (missilesLeft >= 1) {
    //ask for the coordinates input
    let shoot = readlineSync.question("Choose your target (Ex. A1): ");
    //handle invalid input
    if (shoot === '' || shoot.length === 1 || shoot.length > 3) {
        console.log("Invalid input")
    } else {
        //extract the value representating the number from the user input
        let extractedNumber = shoot.slice(1);
        //parse it to intege since its is technically a string
        let numberCoordinates = parseInt(extractedNumber);
        //assign the above to the coordinates [0]
        coordinates[0] = numberCoordinates;
        //use letters array map the letter from the user input, trabnslate it into the index number, assign to the element at [1] in the coordinates array
        let extractedLetterCoordinate = letters.indexOf(shoot.charAt(0).toLowerCase());
        coordinates[1] = extractedLetterCoordinate;
        console.log(">>", coordinates);
        //handle invalid inputs
        if (coordinates[0] > grid.length || coordinates[1] > grid[0].length || isNaN(numberCoordinates) || coordinates[1] === -1 || coordinates[0] === 0) {
            console.log("Invalid input")
        }
        //if you hit the ship in the grid then mark it with X, handle hits increase and invoke function to re-draw the board with up to date mapping
        else if (grid[coordinates[0] - 1][coordinates[1] - 1] == "1") {
            shotResult = true
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = chalk.bgGreen("X")
            hit++;
            displayBoard(shotResult);
            //handle miss shot
        } else {
            shotResult = false;
            battleBoard[coordinates[0] - 1][coordinates[1] - 1] = chalk.red("O");
            miss++;
            displayBoard(shotResult);
        }
        //announce the winner when a user hits all the ships, exit the loop prematurely
        if (hit == countX) {
            console.log(`YOU SANK MY ENTIRE FLEET!\nYou had ${hit} out of ${countX} hits, which sank all the ships.\nYou won, congratulations!`);
            break;
        }
    }
};

//announce lost game when user runs out of missiles
if (missilesLeft == 0) {
    console.log(`You have 0 missiles remaining.\nGAME OVER.\nYou had ${hit} out of ${countX} hits, but did not sink all the ships.\nBetter luck next time.`);
};















