import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
class App extends Component {
	constructor() {
		super();

		this.state = {
			direction: null,
			components: ["Home", "About", "Technologies", "Tools", "Projects"],
			middle: false,
			bottom: "Home",
		};
	}

	componentDidMount() {
		let scrollStatus = {
			wheeling: false,
			functionCall: false,
		};

		window.addEventListener("wheel", e => {
			scrollStatus.wheeling = true;
			if (!scrollStatus.functionCall) {
				if (e.deltaY > 0) {
					this.updateState(true);
					console.log(this.state.middle);
					console.log(this.state.bottom);
				}
				if (e.deltaY < 0) {
					this.updateState(false);
					console.log(this.state.middle);
					console.log(this.state.bottom);
				}
				scrollStatus.functionCall = true;
			}

			window.setTimeout(() => {
				scrollStatus.wheeling = false;
				scrollStatus.functionCall = false;
			}, 400);
		});
	}

	updateState(flag) {
		const state = this.state;
		console.log(flag);
		this.setState({
			direction: flag,
			middle: !state.middle
				? state.components[0]
				: state.components[state.components.indexOf(state.middle) + 1],
			bottom:
				state.components[state.components.indexOf(state.bottom) + 1],
		});
	}

	render() {
		return (
			<div className="App">
				<Home props={this.state} />
				<About props={this.state} />
				<Technologies props={this.state} />
			</div>
		);
	}
}

export default App;
