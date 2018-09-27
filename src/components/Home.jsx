import React, { Component } from "react";
import lnkdLogo from "../assets/lnkdn-logo.png";
import cdpnLogo from "../assets/cdpn-logo.png";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="wrapper">
					<div className="title">
						<span className="title--text">My name is Damian</span>
					</div>
					<div className="tiny-info">
						<span className="content">
							I'm 21 years old IT student and design-minded
							front-end software engineer focused on building
							beautiful interfaces & experiences. Currently I'm
							working in Sealcode.org.
						</span>

						<div className="social-buttons">
							<button className="btn lnkd">
								My profile on
								<img src={lnkdLogo} />
							</button>

							<button className="btn cdpn">
								My profile on <img src={cdpnLogo} />
							</button>
						</div>
					</div>
				</div>
				<svg
					xmlns="//www.w3.org/2000/svg"
					className="shardRight"
					viewBox="0 0 165.9 369.5"
					preserveAspectRatio="xMaxYMin meet"
				>
					<path d="M167 0v369.5S97.7 282.2 63.3 213.7l9-2.5C48 163.5 19.3 106.4 4.8 44l4-1C6 30 0 0 0 0h166z" />
				</svg>
			</div>
		);
	}
}

export default Home;
