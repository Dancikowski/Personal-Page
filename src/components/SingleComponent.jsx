import React from "react";

import Home from "./Home";
import About from "./About";

const SingleComponent = props => {
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
			{{ Home: <Home />, About: <About /> }[props.name]}
		</div>
	);
};

export default SingleComponent;
