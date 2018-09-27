import React from "react";

const DotButtons = props => {
	return (
		<li
			onClick={() => props.Update(props.name)}
			style={
				props.state.selected === props.name ? { color: "#fafafa" } : {}
			}
		>
			<div className="tooltip">{props.name}</div>
		</li>
	);
};

export default DotButtons;
