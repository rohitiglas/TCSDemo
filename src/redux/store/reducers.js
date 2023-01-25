import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
 
export const combinedReducers = combineReducers({
 form: formReducer,
 Auth: AuthReducer,
});