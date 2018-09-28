import React from "react";
const colors = ["#fafafa", "#3b3b3b", "#c5c599", "#fafafa"];
const Menu = props => {
	return (
		<li
			style={{ color: colors[props.components.indexOf(props.selected)] }}
			onClick={() => props.Update(props.name)}
		>
			{props.name}
		</li>
	);
};

export default Menu;
