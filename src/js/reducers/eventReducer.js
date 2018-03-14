
import {ARROW_RIGHT,ARROW_LEFT} from '../constants';
import events from '../Data';

 export default function (state=0,action) {
	switch(action.type){
		case ARROW_LEFT:
			if(state<=0){
				return state
			}
			else{
				return state-action.payload;
			}
		case ARROW_RIGHT:
		if(state >= events.length-4){
			return state=events.length-4
			
		}
		else{
			return state+action.payload
		}	
	}
	return state;
}
