import React, { Component, createElement as e } from "react";

import Home from "./Home";
class SingleComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const props = this.props;
		console.log(props.state.components.indexOf(props.name));

		return (
			<div
				className={
					props.state.selected === props.name
						? `active animated center wrapper--${props.name}`
						: `center wrapper--${props.name} ${props.position} ${
								props.unvisible
						  }`
				}
			>
				{{ Home: <Home /> }[props.name]}
			</div>
		);
	}
}

export default SingleComponent;
