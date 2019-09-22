import { combineReducers } from 'redux';

import SomeReducer from './some_reducer';


const rootReducer = combineReducers({
    someValue: SomeReducer
});


export default rootReducer;
