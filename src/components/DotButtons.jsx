import React, { Component } from "react";

const DotButtons = props => {
	return (
		<li
			onClick={() => props.Update(props.name)}
			style={
				props.state.selected === props.name
					? { color: "#ffffff98" }
					: {}
			}
		>
			<div className="tooltip">{props.name}</div>
		</li>
	);
};

export default DotButtons;
