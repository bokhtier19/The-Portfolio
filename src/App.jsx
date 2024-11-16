import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Intro />
			<AboutMe />
			<MyProjects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
