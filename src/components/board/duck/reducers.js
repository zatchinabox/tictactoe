import types from "./types";

const INITIAL_STATE = {
    board: Array.from({length: 3}, () => Array.from({length: 3}, () => "")),
    playerTurn: Math.floor(Math.random() * Math.floor(2)) === 1 ? "X" : "O",
    player1: "X",
    player2: "O",
    result: null
};
  
const connectedAppReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESET_BOARD: {
            return {
                ...state,
                playerTurn: Math.floor(Math.random() * Math.floor(2)) === 1 ? "X" : "O",
                board: Array.from({length: 3}, () => Array.from({length: 3}, () => "")),
                result: null
            };
        }
        case types.UPDATE_BOARD: {
            return {
                ...state,
                board: action.payload.board,
                playerTurn: state.playerTurn === "X" ? "O" : "X"
            };
        }
        case types.UPDATE_BOARD_RESULT: {
            return {
                ...state,
                result: action.payload.result
            };
        }
        default:
            return state;
    }
};
  
export default connectedAppReducer;
  