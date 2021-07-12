import React from 'react';

function Equals(props) {
	return (
		<button id={props.id} className="pad special-btn col-3" value={props.number} onClick={() => props.handleResult()}>{props.number}</button>
	);
}

export default Equals;