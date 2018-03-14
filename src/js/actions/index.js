import {ARROW_RIGHT,ARROW_LEFT} from '../constants';

export function arrowRightAction() {
	return {
		type:ARROW_RIGHT,
		payload:1
	}
}
export function arrowLeftAction() {
	return {
		type:ARROW_LEFT,
		payload:1
	}
}