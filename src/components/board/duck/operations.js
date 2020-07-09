import actions from './actions';
import selectors from './selectors';
import { connectedAppOperations } from '../../connected-app/duck';

const resetBoard = () => (dispatch) => {
    dispatch(actions.resetBoard());
};

const updateBoard = (board) => (dispatch) => {
    dispatch(actions.updateBoard(board));
    const result = selectors.checkResult(board);
    if(result) {
        dispatch(actions.updateBoardResult(result));
        dispatch(connectedAppOperations.updateStats(result));
    }
};

export default {
    resetBoard, updateBoard
}