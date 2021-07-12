import React from 'react';

function Numbers(props) {
	return(
		<button id={props.id} className="pad numbers col-3" value={props.number} onClick={() => props.handleClick(props.number)}>{props.number}</button>
	);
}

export default Numbers;