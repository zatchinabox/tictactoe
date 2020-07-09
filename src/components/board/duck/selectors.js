const getColumn = (board, n) => {
    return board.map(x => x[n]);
};

const checkWon = (board, val) => {
    // check all rows
    for(let i = 0; i < board.length; i++){
        if(board[i].every(value => value === val))
            return true;
    }

    // check all columns
    for(let i = 0; i < board.length; i++){
        if(getColumn(board, i).every(value => value === val))
            return true;
    }

    // check left-diagonal
    let check = true;
    for(let i = 0; i < board.length; i++){
        if(board[i][i] !== val){
            check = false;
            break;
        }
    }
    if(check) return true;

    // check right-diagonal
    check = true;
    for(let i = 0; i < board.length; i++){
        if(board[board.length - 1 -i][i] !== val){
            check = false;
            break;
        }
    }
    if(check) return true;

    return false;
};

const checkIsFilled = (board) => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === "")
                return false;
        }
    }
    return true;
};

const checkResult = (board) => {
    const xWon = checkWon(board, "X");
    const oWon = checkWon(board, "O");
    const isFilled = checkIsFilled(board);

    if(xWon)
        return "X";
    else if(oWon)
        return "O";
    else if(isFilled)
        return "draw";
    return null;
};

export default {
    checkResult
};