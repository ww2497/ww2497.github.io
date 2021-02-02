import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'

import './App.scss';
import rainImage from './assets/rain.jpg';
import rainVideo from './assets/rain.mp4';

class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<ul>
						<a href="#home"><li>Home</li></a>
						<a href="#about"><li>About</li></a>
						<a href="#experience"><li>Experience</li></a>
						<a href="#projects"><li>Projects</li></a>
						<a href="#contact"><li>Contact</li></a>
					</ul>
				</nav>
				<section id="home">
					<img id="rain-image" src={rainImage} alt="Graphic of a rainy day in the city through a window." />
					<video id="rain-video" title="Animated graphic of a rainy day in the city through a window." loop autoPlay muted playsInline>
						<source src={rainVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>

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
				</section>
				<section id="about">
					About
					<br/>
					Hello! My name is William.
				</section>
			</div>
		);
	}
}

export default App;
