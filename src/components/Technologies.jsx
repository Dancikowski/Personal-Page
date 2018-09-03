import React from "react";

const Technologies = props => {
	return (
		<div
			className={
				props.props.bottom == "Technologies"
					? `slideUpBottom wrapper--Technologies`
					: props.props.middle == "Technolgies"
						? "slideUpTop wrapper--Technologies"
						: "wrapper--Technologies"
			}
		/>
	);
};

export default Technologies;
