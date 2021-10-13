import React from 'react';

import { Link } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

class App extends React.Component {
	showNav(data) {
		document.getElementById("nav").classList.remove("invisible");
	}
	hideNav(data) {
		document.getElementById("nav").classList.add("invisible");
	}
	playVideo(data) {
		document.getElementById("rain-video").play();
	}
	pauseVideo(data) {
		document.getElementById("rain-video").pause();
	}
	render() {
		const scrollDuration = 500;
		return (
			<div>
				<nav id="nav">
					<ul>
						<li id="navHome"><Link activeClass="active" to="home" spy={true} smooth={true} duration={scrollDuration} onSetActive={this.hideNav}>Home</Link></li>
						<li id="navAbout"><Link activeClass="active" to="about" spy={true} smooth={true} duration={scrollDuration} onSetActive={this.showNav}>About</Link></li>
						<li id="navResume"><Link activeClass="active" to="resume" spy={true} smooth={true} duration={scrollDuration}>Résumé</Link></li>
					</ul>
				</nav>
				<Waypoint onEnter={this.playVideo} onLeave={this.pauseVideo}></Waypoint>
				<section id="home">
					<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
					<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop muted playsInline>
						<source src={rainVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<Waypoint onEnter={this.showNav} onLeave={this.hideNav}>
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
								I'm <span>William</span>, an undergraduate <span>Computer Science</span> student at the <span>Rochester Institute of Technology</span>.
								My expected graduation date is <span>May 2023</span>.
								I have a passion for full-stack development with a lean towards front-end development.
							</p>
						</div>
						<div id="about-info">
							<div>
								<h3>OBJECTIVE</h3>
								<p>
									Currently, I'm open to internships taking place during any time in 2022.
								</p>
								<p>
									You can find my résumé below ― if you think that I'd be a good fit, shoot me an email at <a href="mailto:ww2497@rit.edu">ww2497@rit.edu</a>!
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
							Résumé
						</h1>
						<p>
							Sorry, this part is also under construction!
						</p>
						<p>
							For now, <a href="/resume.pdf">here's</a> a link to a PDF of my résumé.
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
