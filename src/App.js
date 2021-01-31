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

				</nav>
				<section id="home">
					<img id="rain-image" src={rainImage} alt="Image of rain through a window. The video is an animated version." />
					<video id="rain-video" loop autoPlay muted playsInline>
						<source src={rainVideo} type="video/mp4" />
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
							Under construction!
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
