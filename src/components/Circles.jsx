import React from 'react';
import './Circles.css';

function Circles(props) {
	return (
		<div className="Circles">
			{props.circles.map((circle, i) => (
				<div
					key={circle}
					className={props.selectedCircle === circle ? 'selected' : ''}
				>
					{circle}
				</div>
			))}
		</div>
	);
}

export default Circles;
