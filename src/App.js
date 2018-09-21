import React, { Component } from "react";
import "./App.css";
import SingleComponent from "./components/SingleComponent";
import SingleComponentMobile from "./components/SingleComponentMobile";
import DotButtons from "./components/DotButtons";
import Menu from "./components/MainMenu";
class App extends Component {
	constructor() {
		super();

		this.state = {
			components: ["Home", "About", "Technologies", "Tools"],
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
			if (event.keyCode === 40) this.signleScrollDown();
			if (event.keyCode === 38) this.singleScrollUp();
		});

		let scrollTimer = false;

		window.addEventListener("wheel", e => {
			e.preventDefault();
			scrollStatus.wheeling = true;
			if (!scrollStatus.functionCall) {
				this.pageScroll(e);
				scrollStatus.functionCall = true;
			}

			window.clearInterval(scrollTimer);
			scrollTimer = window.setTimeout(function() {
				scrollStatus.wheeling = false;
				scrollStatus.functionCall = false;
			}, 500);
		});
	}

	pageScroll(e) {
		if (e.deltaY > 0) {
			this.signleScrollDown();
		}
		if (e.deltaY < 0) {
			this.singleScrollUp();
		}
	}

	signleScrollDown() {
		this.state.selected !== this.state.components.slice(-1)[0] &&
			this.setState({
				selected: this.state.components[
					this.state.components.indexOf(this.state.selected) + 1
				],
			});
	}
	singleScrollUp() {
		this.state.selected !== this.state.components[0] &&
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
				{window.matchMedia("(min-width: 1025px)").matches && (
					<nav className="main-menu">
						<ul>
							{this.state.components.map(name => (
								<Menu
									Update={this.handleUpdateSelected}
									name={name}
									key={name}
								/>
							))}
						</ul>
					</nav>
				)}
				{window.matchMedia("(min-width: 1025px)").matches ? (
					this.state.components.map((name, index) => (
						<SingleComponent
							key={name}
							state={this.state}
							name={name}
							unvisible={
								this.state.begin !== name ? "unvisible" : ""
							}
							position={
								this.state.components.indexOf(
									this.state.components[index]
								) >
								this.state.components.indexOf(
									this.state.selected
								)
									? "after"
									: "before"
							}
						/>
					))
				) : (
					<div className="mobile-wrapper">
						{" "}
						{this.state.components.map((name, index) => (
							<SingleComponentMobile key={name} name={name} />
						))}
					</div>
				)}
				{window.matchMedia("(min-width: 1025px)").matches && (
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
				)}
			</div>
		);
	}
}
export default App;
