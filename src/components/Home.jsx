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
					<div className="card dots" />
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
			</div>
		);
	}
}

export default Home;
