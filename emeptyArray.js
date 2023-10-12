//generate 3x3 2 darray away with nothing in the values

// attempt one
// const ticTacToe = [['-','-','-'],
//                   ['-','-','-'],
//                   ['-','-','-']];
// ticTacToe[2][2] = 'X'//nora
// ticTacToe[0][2] = 'O'//cameron
// ticTacToe[0][0] = 'X'//simeon
// ticTacToe[1][1] = '0'//seb
// ticTacToe[2][0] = 'X'//tiff
// ticTacToe[1][0] = 'X'//karo

// for(let i=0; i<ticTacToe.length; i++){
//     let row = '';
//     for(let j=0; j<ticTacToe[i].length; j++){
//         //create a visual of each row and print to the screen
//         row += ticTacToe[i][j] + ' '
//     }
//     console.log(row)
// }

//attempt two
const ticTacToe = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];
ticTacToe[2][2] = 'X'//nora
ticTacToe[0][2] = 'O'//cameron
ticTacToe[0][0] = 'X'//simeon
ticTacToe[1][1] = '0'//seb
ticTacToe[2][0] = 'X'//tiff
ticTacToe[1][0] = 'X'//karo

for(let i=0; i<ticTacToe.length; i++){
    let row = '';
    for(let j=0; j<ticTacToe[i].length; j++){
        //create a visual of each row and print to the screen
        if (ticTacToe[i][j] != null) {
            row += ticTacToe[i][j] + ' '
        } else {
            row += ' _ '
        }
    }
    console.log(row)
}