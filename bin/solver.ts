import * as AWS from 'aws-sdk';

let solution: Array<Array<number>>;
export async function handler(event: any) {
    console.log(JSON.stringify(event, undefined, 2))

    const body = JSON.parse(event.body) 
    let { board } = body;
    console.log(board);

    solveSudoku(board);

    console.log(solution);

}

const checkGuess = (num: number, row: number, col: number, board: Array<Array<number>>) => {
    let i = row;
    for(let j = 0; j<board.length; j++){
        if(board[i][j]==num){
            return false;
        }
    }
    //Check Column
    let j = col;
    for(let i = 0; i<board.length; i++){
        if(board[i][j]==num){
            return false;
        }
    }
    //Check Sector
    let r = row - row % 3;
    let c = col - col % 3; 
    for(let i = r; i<(r+3); i++){
        for(let j = c; j<(c+3); j++){
            if(board[i][j]==num){
                return false;
            }
        }
    }
    return true;
}

const solveSudoku = (board: Array<Array<number>>) => {
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board.length; col++){
            if(board[row][col]==0){
                for(let n = 1; n<=9; n++){
                    if(checkGuess(n, row, col, board)){
                        board[row][col] = n;
                        if(solveSudoku(board)){
                            return true;
                        } else {
                            board[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    solution = board;
    return true;

}