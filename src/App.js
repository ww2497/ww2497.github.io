import React, { useState } from 'react';

import { Link } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import './App.sass';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

function App(props) {
	const [navShown, showNav] = useState(true);
	const scrollDuration = 500;

	function getVideo() {
		return document.getElementById("rain-video");
	}

	return (
		<div>
			<nav id="nav" className={navShown ? "" : "hide"}>
				<ul>
					<li id="navHome"><Link activeClass="active" to="home" spy={true} smooth={true} duration={scrollDuration} onSetActive={() => showNav(false)}>Home</Link></li>
					<li id="navAbout"><Link activeClass="active" to="about" spy={true} smooth={true} duration={scrollDuration} onSetActive={() => showNav(true)}>About</Link></li>
					<li id="navResume"><Link activeClass="active" to="resume" spy={true} smooth={true} duration={scrollDuration}>Résumé</Link></li>
				</ul>
			</nav>
			<Waypoint onEnter={() => getVideo().play()} onLeave={() => getVideo().pause()}></Waypoint>
			<section id="home">
				<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
				<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop muted playsInline>
					<source src={rainVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<Waypoint onEnter={() => showNav(true)} onLeave={() => showNav(false)}>
					<div></div>
				</Waypoint>
				<div className="content">
					<h1 id="name">
						William Wu
					</h1>
					<h2 id="roles">
						Web Developer | Game Developer
					</h2>
					<div id="urls">
						<a id="icon-github" href="https://github.com/ww2497" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a id="icon-linkedin" href="https://www.linkedin.com/in/ww2497/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a id="icon-mail" href="mailto:ww2497@rit.edu">
							<FontAwesomeIcon icon={faEnvelopeSquare} />
						</a>
					</div>
					<div id="wip">
						<FontAwesomeIcon icon={faTools} />
						<span>Under construction!</span>
					</div>
				</div>

				<div></div>
			</section>
			<section id="about">
				<div id="nav-background"></div>
				<div className="content">
					<div id="about-introduction">
						<h1 className="section-name">
							About
						</h1>
						<h2>
							Hey there!
						</h2>
						<p>
							I'm <span>William</span>, an undergraduate <span>Computer Science</span> student at <span>Rochester Institute of Technology</span>.
							My expected graduation date is <span>May 2023</span>.
							I have a passion for full-stack development with a lean towards front-end development.
						</p>
					</div>
					<div id="about-info">
						<div>
							<h3>OBJECTIVE</h3>
							<p>
								Currently, I'm looking for internships for the summer and fall of 2022.
							</p>
							<p>
								You can find my résumé below ― if you think that I might be a good fit, feel free to send me an email at <a href="mailto:ww2497@rit.edu">ww2497@rit.edu</a>!
							</p>
						</div>
						<div>
							<h3>INFORMATION</h3>
							<p>
								Under construction!
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="resume">
				<div className="content">
					<h1 className="section-name">
						Projects
					</h1>
					<p>
						Still thinking about how to best present my projects.
					</p>
					<p>
						For now, <a href="/Résumé.pdf">here's</a> a link to a PDF of my résumé.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
