import types from "./types";

const fetchStatsRequest = () => ({
    type: types.FETCH_STATS_REQUEST,
});
  
const fetchStatsSuccess = (res) => ({
    type: types.FETCH_STATS_SUCCESS,
    payload: res
});
  
const fetchStatsError = (err) => ({
    type: types.FETCH_STATS_ERROR,
    payload: err
});

const updateStatsRequest = () => ({
    type: types.UPDATE_STATS_REQUEST,
});
  
const updateStatsSuccess = (res) => ({
    type: types.UPDATE_STATS_SUCCESS,
    payload: res
});
  
const updateStatsError = (err) => ({
    type: types.UPDATE_STATS_ERROR,
    payload: err
});

export default {
    fetchStatsRequest,
    fetchStatsSuccess,
    fetchStatsError,
    updateStatsRequest,
    updateStatsSuccess,
    updateStatsError
}