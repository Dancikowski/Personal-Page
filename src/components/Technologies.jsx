import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import sass from "../assets/sass.png";
import sql from "../assets/sql.png";

const techLogos = [html, css, javascript, reactLogo, sass, sql];
const Technologies = () => {
	return (
		<div className="technologies">
			<div className="wrapper">
				<div className="card dots" />

				<h2>Technologies which I use in my daily work </h2>

				<div className="technologies-boxes">
					<div className="logotypes">
						{techLogos.map(logo => (
							<img key={logo} src={logo} alt={logo.toString()} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
