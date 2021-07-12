import React from 'react';

function Decimal(props) {
	return(
		<button id={props.id} className="pad numbers col-3" value={props.operator} onClick={() => props.handleDecimal(props.operator)}>{props.operator}</button>
	);
}

export default Decimal;