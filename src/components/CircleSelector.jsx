import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {
	return (
		<div className="CircleSelector">
			{props.circles.map((circle, i) => (
				<button
					key={circle}
					className={props.selectedCircle === circle ? 'selected' : ''}
					onClick={() => props.handleClick(circle)}
				>
					SELECT CIRCLE {circle}
				</button>
			))}
		</div>
	);
}

export default CircleSelector;
