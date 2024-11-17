import React from 'react';
import IntroImage from '../assets/images/Intro.jpg';
import Navbar from './Navbar';

const Intro = () => {
	return (
		<>
			<div
				id='intro'
				className='h-screen md:h-[95vh]'
				style={{
					backgroundImage: `url(${IntroImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'left center',
				}}>
				{/* Navbar could be here if needed */}
				<div className='flex flex-col items-center justify-center w-full h-full px-6 text-center md:items-end md:px-20 md:bg-left-center'>
					<div className='flex flex-col justify-end'>
						<h2 className='mb-2 text-xl tracking-widest text-white md:text-2xl md:text-black anton-regular'>Hello There!</h2>
						<h1 className='p-4 text-2xl tracking-wider text-white uppercase bg-black rounded-md md:text-5xl anton-regular hover-effect'>I am Elius Bokhtier</h1>
						<p className='mt-2 text-sm tracking-wider text-white md:text-lg md:text-black anton-regular'>A frontend web developer based in India.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Intro;
