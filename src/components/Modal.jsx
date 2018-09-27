import React, { Component } from "react";
import ReactDOM from "react-dom";
const modal = document.getElementById("portal");

class Modal extends React.Component {
	constructor(props) {
		super(props);
	}
	el = document.createElement("div");
	componentDidMount() {
		modal.appendChild(this.el);
	}

	componentWillUnmount() {
		modal.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			<div className="info-mobile">
				<div className="header">What is this? </div>
				<div className="close" />
				<p>
					Jumpstyle is a type of dancing developed in Belgium and
					Netherlands from a type of kicking martial arts. It based on
					various types of kicks, spins and other revolutions.
					Jumpstyle, or simply "jump" as it is often referred to, does
					require fast paced dance music (called Hardstyle) with a
					tempo around 140 and even 200 Beats per Minute (BPM) to be
					done fluidly.
				</p>
			</div>,
			this.el
		);
	}
}

export default Modal;
