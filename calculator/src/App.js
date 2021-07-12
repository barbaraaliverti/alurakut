import './App.css';
import React from 'react';
import Display from '../src/components/Display/index';
import Pad from '../src/components/Pad/index';

class App extends React.Component {	
	
	constructor(props) {
		super(props);
		this.state = {
			currentNumber: "0",
			currentExpression: "0",
			result: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
		this.handleDecimal = this.handleDecimal.bind(this);
		this.handleResult = this.handleResult.bind(this);
	}	
	
	handleClick(e) {		
		this.setState({
			currentNumber: 
			// eslint-disable-next-line eqeqeq
			((/^[X%/+]$/).test(this.state.currentNumber) || this.state.currentNumber == 0)?
				e : this.state.currentNumber.concat(e),
			
			currentExpression: 
			// eslint-disable-next-line eqeqeq
			((/^[X%*/+]$/).test(this.state.currentExpression) || this.state.currentExpression == 0) ?
			e	: this.state.currentExpression.concat(e)
		});
	}
	
	handleOperator(e) {
		this.setState({
			currentNumber: e,			
			currentExpression: ((/[%X/+-]$/).test(this.state.currentExpression) && e !== "-")? 
			this.state.currentExpression.replace(/[%X/+-]+$/, e) : this.state.currentExpression.concat(e).replace(/^0/, "")
		});
	}
	
	handleDecimal(e) {
		this.setState({
			currentNumber: ((/\./).test(this.state.currentNumber))?
			// eslint-disable-next-line eqeqeq
			this.state.currentNumber : ((this.state.currentNumber == 0) ? e : this.state.currentNumber.concat(e)),
			
			currentExpression: ((/\./).test(this.state.currentNumber))?
			// eslint-disable-next-line eqeqeq
			this.state.currentNumber :  ((this.state.currentExpression == 0) ? e : this.state.currentExpression.concat(e))
		});
	}
	
	handleClear() {
		this.setState({
			currentNumber: "0",
			currentExpression: "0"
		});
	}
	
	handleResult() {
		this.setState({
			// eslint-disable-next-line no-eval
			currentNumber: eval(this.state.currentExpression.replace(/X/g, '*').replace(/%/g, "/100").replace(/[/*-+]$/,"")).toString(),
			// eslint-disable-next-line no-eval
			currentExpression: eval(this.state.currentExpression.replace(/X/g, '*').replace(/%/g, "/100").replace(/[/*-+]$/,"")).toString()
		});
	}	
	
	render() {
		return(
			<div id="container" className="d-flex">
				<div id="title">
					<h4>a calculator</h4>						
					<p>coded by <a id="contact" href="https://github.com/barbaraaliverti" target="_blank" rel="noreferrer">bárbara aliverti</a></p>
				</div>
				<div id="calculator" className="row d-flex">
					<Display
						currentExpression={this.state.currentExpression}
						currentNumber={this.state.currentNumber}
					/>
					<Pad 
						handleClick={this.handleClick}
						handleClear={this.handleClear}
						handleOperator={this.handleOperator}
						handleDecimal={this.handleDecimal}
						handleResult={this.handleResult}
					/>
				</div>
			</div>
		);
	}	
}

export default App;
