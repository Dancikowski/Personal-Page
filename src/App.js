import React, { Component } from "react";
import "./App.css";
import SingleComponent from "./components/SingleComponent";
import DotButtons from "./components/DotButtons";
import Menu from "./components/MainMenu";
class App extends Component {
	constructor() {
		super();

		this.state = {
			components: ["Home", "About", "Technologies", "Tools", "Projects"],
			begin: null,
			selected: "Home",
		};
	}

	componentDidMount() {
		let scrollStatus = {
			wheeling: false,
			functionCall: false,
		};

		window.addEventListener("keydown", event => {
			console.log(event.keyCode);
			if (event.keyCode === 40) this.signleScrollDown();
			if (event.keyCode === 38) this.singleScrollUp();
		});

		window.addEventListener("wheel", e => {
			scrollStatus.wheeling = true;
			if (!scrollStatus.functionCall) {
				if (e.deltaY > 0) {
					this.state.components.indexOf(this.state.selected) !==
						this.state.components.slice(-1)[0] &&
						this.signleScrollDown();
				}
				if (e.deltaY < 0) {
					this.singleScrollUp();
				}
				scrollStatus.functionCall = true;
			}

			window.setTimeout(() => {
				scrollStatus.wheeling = false;
				scrollStatus.functionCall = false;
			}, 1500);
		});
	}

	signleScrollDown() {
		this.setState({
			selected: this.state.components[
				this.state.components.indexOf(this.state.selected) + 1
			],
		});
	}
	singleScrollUp() {
		this.setState({
			selected: this.state.components[
				this.state.components.indexOf(this.state.selected) - 1
			],
		});
	}

	handleUpdateSelected = component => {
		this.setState({
			selected: component,
		});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.selected !== prevState.selected) {
			this.setState({
				begin: prevState.selected,
			});
		}
	}

	render() {
		return (
			<div className="App">
				<nav className="main-menu">
					<ul>
						{this.state.components.map(name => (
							<Menu
								Update={this.handleUpdateSelected}
								name={name}
							/>
						))}
					</ul>
				</nav>
				{this.state.components.map((name, index) => (
					<SingleComponent
						key={name}
						state={this.state}
						name={name}
						unvisible={this.state.begin !== name && "unvisible"}
						position={
							this.state.components.indexOf(
								this.state.components[index]
							) >
							this.state.components.indexOf(this.state.selected)
								? "after"
								: "before"
						}
					/>
				))}
				<nav className="nav-dots">
					<ul>
						{this.state.components.map(name => (
							<DotButtons
								Update={this.handleUpdateSelected}
								key={name}
								name={name}
								state={this.state}
							/>
						))}
					</ul>
				</nav>
			</div>
		);
	}
}
export default App;
