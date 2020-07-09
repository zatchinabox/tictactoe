import types from "./types";

const INITIAL_STATE = {
    stats: {
        player1Wins: 0,
        player2Wins: 0,
        draws: 0,
    }
};

const connectedAppReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_STATS_SUCCESS: {
            return {
                ...state,
                stats: action.payload
            };
        }
        case types.UPDATE_STATS_SUCCESS: {
            return {
                ...state,
                stats: action.payload
            };
        }
        default:
            return state;
    }
};

export default connectedAppReducer;
