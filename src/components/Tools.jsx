import React from "react";
import Bash from "../assets/bash.png";
import Git from "../assets/git.png";
import Gulp from "../assets/gulp.png";
import Photoshop from "../assets/photoshop.png";

const toolsLogotypes = [Bash, Git, Gulp, Photoshop];

const Tools = () => {
	return (
		<div className="tools">
			<div className="wrapper">
				<div>
					<h2>Tools</h2>
					<p>which boost my work efficiency</p>
				</div>
				<div className="tools-logotypes">
					{toolsLogotypes.map((logo, index) => (
						<img
							className={"tool-logotype--" + index}
							src={logo}
							alt={logo.slice(logo.lastIndexOf("/"))}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tools;
