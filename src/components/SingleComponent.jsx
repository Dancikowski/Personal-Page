import React, { Component, createElement as e } from "react";

import Home from "./Home";
class SingleComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const props = this.props;

		return (
			<div
				className={
					props.state.selected === props.name
						? `active animated wrapper wrapper--${props.name}`
						: `wrapper wrapper--${props.name} ${props.position} ${
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
