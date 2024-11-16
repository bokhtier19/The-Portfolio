import React from 'react';
import IntroImage from '../assets/images/Intro.jpg';
import Navbar from './Navbar';

const Intro = () => {
	return (
		<>
			<div
				id='intro'
				className='min-h-screen overflow-hidden bg-center bg-fit'
				style={{
					backgroundImage: `url(${IntroImage})`,
					backgroundSize: 'cover',
					height: '95vh',
				}}>
				<div className='flex flex-col justify-end w-full mt-[20vh] md:mt-[30vh] items-end text-center'>
					<div className='flex flex-col justify-end mr-20'>
						<h2 className='anton-regular'>Hello There!</h2>
						<h1 className='text-white  p-4 rounded-md bg-black  text-4xl md:text-6xl tracking-wider uppercase anton-regular'>I am Elius Bokhtier</h1>
						<p className='anton-regular'>A frontend web developer based in India.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
