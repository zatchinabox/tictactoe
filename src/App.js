import React from 'react';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ConnectedApp from "./components/connected-app";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>
    );
}

export default App;
