import actions from './actions';
import * as api from '../../../mockApi';

const fetchStats = () => (dispatch) => {
    dispatch(actions.fetchStatsRequest());
    api.getStats()
        .then(res => dispatch(actions.fetchStatsSuccess(res)))
        .catch(err => dispatch(actions.fetchStatsError(err)));
};

const updateStats = (result) => (dispatch) => {
    dispatch(actions.updateStatsRequest());
    api.updateStats(result)
        .then(res => dispatch(actions.updateStatsSuccess(res)))
        .catch(err => dispatch(actions.updateStatsError(err)));
};

export default {
    fetchStats,
    updateStats
};