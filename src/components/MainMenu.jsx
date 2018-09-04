import React, { Component } from "react";

const Menu = props => {
	return <li onClick={() => props.Update(props.name)}>{props.name}</li>;
};

export default Menu;
