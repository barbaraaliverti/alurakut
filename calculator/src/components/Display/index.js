import React from 'react';

class Display extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div id="displayContainer" className="col-12">
				<h5 id="formulaDisplay">{this.props.currentExpression}</h5>
				<h4 id="display">{this.props.currentNumber}</h4>					
			</div>
		);
	}	
}

export default Display;