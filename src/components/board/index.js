import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components'
import { boardOperations } from "./duck";

const BoardContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    border: solid black 1px;
`;

const Square = styled.div`
    width: 70px;
    height: 70px;
    border: solid #d1d1d1 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */   
`;

const Row = styled.div`
    display: flex;
`;

const BoardState = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`;

const BoardResult = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    color: green;
`;

const Board = ({ board, updateBoard, playerTurn, player1, player2, result }) => {

    const handleSquareClick = (value, row, col) => {
        if(value === "" && !result){
            const newBoard = Object.assign([], board);
            newBoard[row][col] = playerTurn;
            updateBoard(newBoard);
        }
    };

    return (
        <>
            <BoardState>
                <div>Player 1: {player1}</div>
                <div>Player 2: {player2}</div>
                <div>Player's turn: {playerTurn}</div>
                {result && 
                    <BoardResult>
                        {
                            result === "X" ? "Player 1 wins!" :
                            result === "O" ? "Player 2 wins!" :
                            "It's a draw!"
                        }
                    </BoardResult>
                }
            </BoardState>
            <BoardContainer>
                {
                    board.map((row, rowKey) => {
                        return <Row key={rowKey}>
                            {row.map((item, colKey) => {
                                return <Square onClick={() => handleSquareClick(item, rowKey, colKey)} key={colKey}>{item}</Square>;
                            })}
                        </Row>
                    })
                }
            </BoardContainer>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    const updateBoard = (board) => dispatch(boardOperations.updateBoard(board))
    return { updateBoard };
}

const mapStateToProps = (state) => ({
    ...state,
    playerTurn: state.board.playerTurn,
    player1: state.board.player1,
    player2: state.board.player2,
    result: state.board.result,
    board: state.board.board,
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);