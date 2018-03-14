import React from 'react';

const Arrow=({arrowLeftAction,arrowRightAction})=>{
	return (
		<div>
			<div className="arrowRight"
			onClick={()=> arrowRightAction()}
			>
			
			</div>
			<div className="arrowLeft"
			onClick={()=> arrowLeftAction()}
			>
			</div>
		</div>
	)
}

export default Arrow;