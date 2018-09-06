import React from "react";

const About = () => {
	return (
		<div className="about">
			<div className="wrapper">
				<div className="about-illustrations" />
				<div className="content">
					<h3>About me</h3>
					<span className="description">
						Before I started programming I did lots of different
						things, inter alia, I was a football player,
						<span className="jumpstyle">
							{" "}
							jumpstyle{" "}
							<span className="info">
								<p>
									Jumpstyle, originally known simply as jump,
									was created in Belgium and started in 1997.
									It was a short-lived small genre that didn't
									gain popularity in its original form.
									However, it came back to the public during
									the turn of the century, and fandom began
									increasing throughout Europe after
									undergoing significant changes in Germany in
									early 2003.
								</p>
							</span>
						</span>
						dancer (with some successes) , professional middle
						distance runner as well. At present my second favourite
						technic fields (obviously after programming) is
						filmmaking which still improve my visually skills and
						give me a satisfaction. All of these things confirmed my
						conviction how important it is to ameliorate your skills
						every day. It also helps me in proframming learning.
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
