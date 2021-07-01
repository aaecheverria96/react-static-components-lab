import React, { Component } from 'react';
import MouseComponent from './MouseComponent';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import CatComponent from './CatComponent';


class App extends Component {
	state = {
		Harry: {
			name: "Harry", 
			age: 12, 
			color: "black" 
		}
	}
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent cat = {this.state.Harry}/>
				<GraceHopperQuoteComponent />
				<MouseComponent /> 
			</div>
		);
	}
}

export default App;
