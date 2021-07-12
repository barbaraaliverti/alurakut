import React from 'react';

function Zero(props) {
	return (
		<button id={props.id} className="pad numbers col-6" value={props.number} onClick={() => props.handleClick(props.number)}>{props.number}</button>
	);
}

export default Zero;