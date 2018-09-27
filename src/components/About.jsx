import React, { Component } from "react";
import Modal from "./Modal";
import Tooltip from "./Tooltip";

class About extends Component {
	state = { portalVisibility: false };

	handleMouseEnter = () => {
		alert("siema");
	};
	render() {
		return (
			<div className="about">
				<div className="wrapper">
					<div className="content">
						<h3>About me</h3>
						<span className="description">
							Before I started programming I did lots of different
							things, inter alia, I was a football player,
							{
								<span
									className="jumpstyle"
									onTouchEnd={this.handleMouseEnter}
								>
									{" "}
									jumpstyle{" "}
									{window.matchMedia("(min-width:1025px)")
										.matches ? (
										<Tooltip />
									) : (
										this.state.portalVisibility && <Modal />
									)}
								</span>
							}
							dancer (with some successes) , professional middle
							distance runner as well. At present my second
							favourite technic fields (obviously after
							programming) is filmmaking which still improve my
							visually skills and give me a satisfaction. All of
							these things confirmed my conviction how important
							it is to ameliorate your skills every day. It also
							helps me in programming learning.
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
