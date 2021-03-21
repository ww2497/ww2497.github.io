import React from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}
	showNav(data) {
		document.getElementById("nav").classList.add("transparent");
	}
	hideNav(data) {
		document.getElementById("nav").classList.remove("transparent");
	}
	transparentNav(data) {
		document.getElementById("nav").classList.remove("opaque");
		document.getElementById("nav-background").classList.remove("fixed");
	}
	opaqueNav(data) {
		document.getElementById("nav").classList.add("opaque");
		document.getElementById("nav-background").classList.add("fixed");
	}
	playVideo(data) {
		var vid = document.getElementById("rain-video");
		vid.play();
	}
	stopVideo(data) {
		var vid = document.getElementById("rain-video");
		vid.pause();
	}

	render() {
		const scrollDuration = 500;
		return (
			<div>
				<nav id="nav">
					<ul>
						<li id="navHome"><Link activeClass="active" to="home" spy={true} smooth={true} duration={scrollDuration} onSetActive={this.transparentNav}>Home</Link></li>
						<li id="navAbout"><Link activeClass="active" to="about" spy={true} smooth={true} duration={scrollDuration} onSetActive={this.opaqueNav}>About</Link></li>
						<li id="navResume"><Link activeClass="active" to="resume" spy={true} smooth={true} duration={scrollDuration} onSetActive={this.opaqueNav}>Résumé</Link></li>
					</ul>
				</nav>
				<Waypoint onEnter={this.playVideo} onLeave={this.stopVideo}>
				</Waypoint>
				<section id="home">
					<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
					<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop muted playsInline>
						<source src={rainVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<Waypoint onEnter={this.showNav} onLeave={this.hideNav}>
						<div></div>
					</Waypoint>

					<div class="content">
						<h1 id="name">
							William Wu
						</h1>
						<h2 id="roles">
							Web Developer | Game Developer
						</h2>
						<div id="socials">
							<a id="icon-github" href="https://github.com/ww2497" target="_blank">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a id="icon-linkedin" href="https://www.linkedin.com/in/ww2497/" target="_blank">
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
					<div class="content">
						<div id="about-introduction">
							<h1 class="section-name">
								About
							</h1>
							<p class="white">
								NOTE: Under construction!
							</p>
							<h1 class="white">
								Hello there!
							</h1>
							<p class="justify">
								I'm <span>William</span>, an undergraduate <span>Computer Science</span> student at the <span>Rochester Institute of Technology</span>.
								My expected graduation date is <span>May 2023</span>.
								I have a passion for full-stack development with a lean towards front-end development.
							</p>
							<p class="justify">
								At present <span>(Spring 2020)</span>, I'm taking the semester off and waiting for classes to come offline so that my learning experience isn't affected.
								In the meantime, I'm doing game development work in addition to working on some other projects, such as this website.
							</p>
						</div>
						<div id="about-info">
							<div>
								<h3 class="white">OBJECTIVE</h3>
								<p class="justify">
									Currently, I'm available for the summer and fall of 2021.
									I'd be interested in a software developer or full-stack developer internship for either the summer or fall, or for both.
								</p>
								<p class="justify">
									You can find my résumé below ― if you think I'd be a good fit, shoot me an email at <a href="mailto:ww2497@rit.edu">ww2497@rit.edu</a>!
								</p>
							</div>
							<div>
								<h3 class="white">INFORMATION</h3>
								<p class="justify">
									TODO
								</p>
							</div>
						</div>
					</div>
				</section>
				<section id="resume">
					<div class="content">
						<h1 class="section-name">
							Résumé
						</h1>
						<p class="justify">
							Sorry, this part is also under construction! For now, <a href="/resume.pdf">here's</a> a link to a PDF of my résumé.
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
