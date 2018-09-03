import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};
	}

	render() {
		const props = this.props;
		return (
			<div
				className={
					props.props.middle == "Home"
						? `slideUpTop wrapper--Home`
						: "wrapper--Home"
				}
			>
				<div className="card dots" />
				<span className="my-name">My name is Damian</span>
			</div>
		);
	}
}

export default Home;
