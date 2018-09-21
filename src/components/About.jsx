import React from "react";

const About = () => {
	function log() {
		document.querySelector(".info").style.visibility = "visible";
	}
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
								onClick={() => alert("log")}
							>
								{" "}
								jumpstyle{" "}
								<span className="info">
									<p>
										Jumpstyle is a type of dancing developed
										in Belgium and Netherlands from a type
										of kicking martial arts. It based on
										various types of kicks, spins and other
										revolutions. Jumpstyle, or simply "jump"
										as it is often referred to, does require
										fast paced dance music (called
										Hardstyle) with a tempo around 140 and
										even 200 Beats per Minute (BPM) to be
										done fluidly.
									</p>
								</span>
							</span>
						}
						dancer (with some successes) , professional middle
						distance runner as well. At present my second favourite
						technic fields (obviously after programming) is
						filmmaking which still improve my visually skills and
						give me a satisfaction. All of these things confirmed my
						conviction how important it is to ameliorate your skills
						every day. It also helps me in programming learning.
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
