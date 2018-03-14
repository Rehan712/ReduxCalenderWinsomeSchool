import React from 'react';
import events from '../Data';
const Event =({event})=>{
	let selectedEvent=[...events];
	return selectedEvent.slice(event,event+4).map(({...item},index)=>(
		<div className="event">
			<div className="comingEvents">
				{item['event']}
			</div>
			<div className="comingEventsDates">
					{item['eventDate']}
			</div>
			<div className="time">{item['time']}</div>
		</div>
	))
}

export default Event;