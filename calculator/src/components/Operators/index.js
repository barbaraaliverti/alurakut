import React from 'react';

function Operators(props) {
	return(
		<button id={props.id} className="pad operator col-3" value={props.operator} onClick={() => props.handleOperator(props.operator)}>{props.operator}</button>
	);
}

export default Operators;