import { combineReducers } from 'redux';
import connectedAppReducer from './components/connected-app/duck';
import boardReducer from './components/board/duck';

const rootReducer = combineReducers({
  connectedApp: connectedAppReducer,
  board: boardReducer,
});

export default rootReducer;
