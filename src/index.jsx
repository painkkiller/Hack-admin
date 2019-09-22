import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from 'components/App';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const appStore = createStoreWithMiddleware(reducers);


ReactDOM.render(
    <Provider store={ appStore }>
        <App />
    </Provider>   
    , document.getElementById('root'));
