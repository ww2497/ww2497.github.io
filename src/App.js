import React, { useState } from 'react';

import { Link } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import './App.sass';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

import rogue from './assets/rogue.png';
import brickhack from './assets/brickhack.png';
import wegmans from './assets/wegmans.png';

var classNames = require('classnames');

function App(props) {
	const [navHidden, hideNav] = useState(false);
	const [navBackground, showNavBackground] = useState(false);
	const scrollDuration = 750;

	function getVideo() {
		return document.getElementById("rain-video");
	}

	return (
		<div>
			<nav id="nav" className={classNames({"hide": navHidden}, {"background": navBackground})}>
				<ul>
					<li id="navHome"><Link activeClass="active" to="home" spy={true} smooth={true} duration={scrollDuration} onSetActive={() => [hideNav(true), showNavBackground(false)]}>Home</Link></li>
					<li id="navAbout"><Link activeClass="active" to="about" spy={true} smooth={true} duration={scrollDuration} onSetActive={() => [hideNav(false), showNavBackground(true)]}>About</Link></li>
					<li id="navResume"><Link activeClass="active" to="resume" spy={true} smooth={true} duration={scrollDuration} onSetActive={() => showNavBackground(true)}>Résumé</Link></li>
				</ul>
			</nav>
			<Waypoint onEnter={() => getVideo().play()} onLeave={() => getVideo().pause()}></Waypoint>
			<section id="home">
				<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
				<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop muted playsInline>
					<source src={rainVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>

				<Waypoint onEnter={() => hideNav(false)} onLeave={() => hideNav(true)}>
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
						</p>
						<p>
							I have a passion for full-stack development with a lean towards front-end development.
							In my free time, you'll find me developing games on <span>Roblox Studio</span>, reading the latest <span>Brandon Sanderson</span> novel, or drawing on my tablet.
						</p>
					</div>
					<div id="about-info">
						<div>
							<h3>Objective</h3>
							<p>
								Currently, I'm looking for an internship for the summer of 2022.
							</p>
							<p>
								You can find my résumé below ― if you think that I might be a good fit, feel free to shoot me an email at <a href="mailto:ww2497@rit.edu">ww2497@rit.edu</a>!
							</p>
						</div>
						<div>
							<h3>Placeholder</h3>
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
						Sorry, still working on the modals for the stuff you see below! For now, <a href="./resume.pdf">here's</a> a link to a PDF of my résumé.
					</p>
					<h2>Projects</h2>
					<div id="projects">
						<Project image={rogue}>
						</Project>
						<Project image={brickhack}>
						</Project>
						<Project image={wegmans}>
						</Project>
					</div>
				</div>
			</section>
		</div>
	);
}

function Project(props) {
	const [visible, makeVisible] = useState(false);
	return (
		<div className={classNames("project", {"fadein": visible})}>
			{<img src={props.image} alt="Project icon"/>}
			<Waypoint onEnter={() => makeVisible(true)}></Waypoint>
		</div>
	);
}

export default App;
