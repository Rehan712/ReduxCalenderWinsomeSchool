import { combineReducers } from 'redux';
import eventReducer from './eventReducer'

const rootReducers=combineReducers({
	event:eventReducer
});

export default rootReducers;
