import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

const circles = [1, 2, 3, 4];

class App extends Component {
	constructor() {
		super();
		this.state = {
			selectedCircle: 1
		};
	}

	handleClick = circle => {
		this.setState({
			selectedCircle: circle
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
				<main>
					<CircleSelector
						circles={circles}
						selectedCircle={this.state.selectedCircle}
						handleClick={this.handleClick}
					/>
					<Circles
						circles={circles}
						selectedCircle={this.state.selectedCircle}
					/>
				</main>
			</div>
		);
	}
}

export default App;
