//generate 3x3 2 darray away with nothing in the values

// const myArray = []
const ticTacToe = [['-','-','-'],
                  ['-','-','-'],
                  ['-','-','-']];
ticTacToe[2][2] = 'X'
ticTacToe[0][2] = 'O'

for(let i=0; i<ticTacToe.length; i++){
    let row = '';
    for(let j=0; j<ticTacToe[i].length; j++){
        //create a visual of each row and print to the screen
        row += ticTacToe[i][j] + ' '
    }
    console.log(row)
}