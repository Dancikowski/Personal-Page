import React from "react";

import Home from "./Home";
import About from "./About";
import Technologies from "./Technologies";
import Tools from "./Tools";

const SingleComponent = props => {
	return (
		<div
			className={
				props.state !== undefined
					? props.state.selected === props.name
						? `active animated wrapper wrapper--${props.name}`
						: `wrapper wrapper--${props.name} ${props.position} ${
								props.unvisible
						  }`
					: `wrapper wrapper--${props.name}`
			}
		>
			{
				{
					Home: <Home />,
					About: <About />,
					Technologies: <Technologies />,
					Tools: <Tools />,
				}[props.name]
			}
		</div>
	);
};

export default SingleComponent;
