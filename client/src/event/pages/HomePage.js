import React from 'react';
import Hero from '../components/home/Hero';
import { Fragment } from 'react/cjs/react.production.min';
import './homepage.scss';
import Vision from '../components/home/Vision';
import About from '../components/home/About';
import ProgramAndEvents from '../components/home/ProgramAndEvents';
import Channel from '../components/home/Channel';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';

const HomePage = () => {
	return (
		<Fragment>
			<Header />
			<Hero />
			<section
				style={{
					zIndex: 2,
					position: 'relative',
				}}>
				<ProgramAndEvents />
				<Vision />
				<Channel />
				<About />
				<Footer />
			</section>
		</Fragment>
	);
};

export default HomePage;
