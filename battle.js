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
let read = fs.readFileSync(__dirname + '/copy.txt', 'utf8');

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

let countX = 0;
// console.log("grid", grid);
for (let h = 0; h < grid.length; h++) {
    // console.log(">>", grid[h]);
    for (let o = 0; o < grid[h].length; o++) {
        // console.log(">>", grid[h][o]);
        if (grid[h][o] === "1") {
            countX++;
        }
    }
}


let hit = 0;
let miss = 0;
let shotResult;



while (misslesLeft >= 1) {
    let shoot = readlineSync.question("Choose your target (Ex. A1): ");
    if (shoot !== undefined) {
        //ask for input

        // misslesLeft = misslesLeft - 1;
        // console.log(`You have ${misslesLeft} missiles left.`);
        // console.log(shoot)
        let coordinates = [];
        let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        let extractedNumber = shoot.slice(1);
        // console.log(extractedNumber);
        let numberCoordinates = parseInt(extractedNumber);

        coordinates[0] = numberCoordinates;
        let extractedLetterCoordinate = letters.indexOf(shoot.charAt(0).toLowerCase());
        coordinates[1] = extractedLetterCoordinate;

        //check what is in the grid array 1 or 0, then apply X or O accordingly
        if (grid[coordinates[0] - 1][coordinates[1] - 1] == "1") {
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
        console.log(countX);
        if (hit == countX) {
            console.log(`YOU SANK MY ENTIRE FLEET!\nYou had ${hit} out of ${countX} hits, which sank all the ships.\n You won, congratulations!`);
            break;
        }
    } else {
        console.log("Invalid entry")
    }
}

if (misslesLeft == 0) {
    console.log(`You have 0 missiles remaining.\nGAME OVER.\nYou had ${hit} out of ${countX} hits.\nBetter luck next time.`);
};















