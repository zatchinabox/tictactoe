import types from "./types";

const resetBoard = () => ({
    type: types.RESET_BOARD,
});

const updateBoard = (board) => ({
    type: types.UPDATE_BOARD,
    payload: {
        board
    }
});

const updateBoardResult = (result) => ({
    type: types.UPDATE_BOARD_RESULT,
    payload: {
        result
    }
})

export default {
    resetBoard, updateBoard, updateBoardResult
}