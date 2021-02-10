import React from 'react';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

class App extends React.Component {
	componentDidMount() {
		var vid = document.getElementById("rain-video");
		vid.play(); // get around autoplay being disabled by low power mode
	}

	showNav(data) {
		document.getElementById("nav").classList.add("show");
	}
	hideNav(data) {
		document.getElementById("nav").classList.remove("show");
	}
	opaqueNav(data) {
		document.getElementById("nav").classList.add("opaque");
	}
	transparentNav(data) {
		document.getElementById("nav").classList.remove("opaque");
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
				<section id="home">
					<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
					<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop muted playsInline>
						<source src={rainVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<Waypoint onEnter={this.showNav} onLeave={this.hideNav}>
						<div></div>
					</Waypoint>

					<div id="home-content">
						<h1 id="name">
							William Wu
						</h1>
						<h2 id="roles">
							Web Developer | Game Developer
						</h2>
						<div id="socials">
							<FontAwesomeIcon icon={faGithub} />
							<FontAwesomeIcon icon={faLinkedin} />
						</div>
						<div id="wip">
							<FontAwesomeIcon icon={faTools} />
							<span>Under construction!</span>
						</div>
					</div>

					<div></div>
				</section>
				<section id="about">
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					About
					<br/>
					Hello! My name is William.
					<br/>
					This part is also under construction.
				</section>
				<section id="resume">
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					Bees?
				</section>
			</div>
		);
	}
}

export default App;
