import React from "react";

const About = props => {
	return (
		<div
			className={
				props.props.bottom == "About"
					? `slideUpBottom wrapper--About`
					: props.props.middle == "About"
						? "slideUpTop wrapper--About"
						: "wrapper--About"
			}
		>
			About
		</div>
	);
};

export default About;
