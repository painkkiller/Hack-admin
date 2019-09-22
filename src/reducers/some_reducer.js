import { FETCH_INITIAL_SESSION } from '../actions';


const INITIAL_STATE = null;


export default function(state = INITIAL_STATE, action) {
    console.log("some reducer: " + action.type);
    console.log(action);
    console.log(action.payload);
    switch(action.type) {
        case FETCH_INITIAL_SESSION:
            return action.payload;


        default:
            return state;
    }
}
