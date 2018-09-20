import React from "react";

import Home from "./Home";
import About from "./About";
import Technologies from "./Technologies";
import Tools from "./Tools";

const SingleComponent = props => {
	return (
		<div
			className={`wrapper wrapper--${props.name}`}
			style={{ position: "static" }}
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
