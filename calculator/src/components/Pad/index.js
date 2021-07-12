import React from 'react';
import Numbers from '../Numbers/index';
import Operators from '../Operators/index';
import Decimal from '../Decimal/index';
import Clear from '../Clear/index';
import Zero from '../Zero/index';
import Equals from '../Equals/index';

class Pad extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	
	render() {
		return(
			<>
			<Clear 
				id="clear"
				clear="AC"
				handleClear={this.props.handleClear}
			/>
			<Operators 
				id="percent"
				operator="%"
				handleOperator={this.props.handleOperator}
			/>
			<Operators 
				id="divide"
				operator="/"
				handleOperator={this.props.handleOperator}
			/>
			<Numbers 
				id="seven"
				number="7"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="eight"
				number="8"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="nine"
				number="9"
				handleClick={this.props.handleClick}
			/>
			<Operators 
				id="multiply"
				operator="X"
				handleOperator={this.props.handleOperator}
			/>
			<Numbers 
				id="four"
				number="4"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="five"
				number="5"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="six"
				number="6"
				handleClick={this.props.handleClick}
			/>
			<Operators 
				id="subtract"
				operator="-"
				handleOperator={this.props.handleOperator}
			/>
			<Numbers 
				id="one"
				number="1"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="two"
				number="2"
				handleClick={this.props.handleClick}
			/>
			<Numbers 
				id="three"
				number="3"
				handleClick={this.props.handleClick}
			/>
			<Operators 
				id="add"
				operator="+"
				handleOperator={this.props.handleOperator}
			/>
			<Zero 
				id="zero"	
				number="0"
				handleClick={this.props.handleClick}
			/>
			<Decimal 
				id="decimal"
				operator="."				
				handleDecimal={this.props.handleDecimal}
			/>
			<Equals
				id="equals"
				handleResult={this.props.handleResult}
				number="="
				/>
			</>
		)
	}
}

export default Pad;