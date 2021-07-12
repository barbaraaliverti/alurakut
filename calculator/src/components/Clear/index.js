import React from 'react';

function Clear(props) {
	return(
		<button id={props.id} className="pad special-btn col-6" value={props.clear} onClick={() => props.handleClear()}>{props.clear}</button>
	);
}

export default Clear;