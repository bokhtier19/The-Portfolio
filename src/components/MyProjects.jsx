import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const MyProjects = () => {
	const projects = [
		{
			title: 'Bark and Brawl',
			description: 'This project showcases my React skills with AI images using ReactJS, Tailwind CSS, and is a fun project.',
			link: 'https://bokhtier19.github.io/Bark-and-Brawl/',
		},
		{
			title: 'Often',
			description: 'A project of an e-commerce website using React.js, Tailwind CSS, and Node.js, a bit based on a tutorial.',
			link: 'https://often-frontend.vercel.app/',
		},
		{
			title: 'Story-Site',
			description: 'This is me Trying to clone a story writing website PRATILIPI.',
			link: 'https://github.com/bokhtier19/Story-Site.git',
		},

		{
			title: 'A protfolio site',
			description: 'This React portfolio site uses HashLinks for auto-scrolling, with plans to add animations like Framer Motion.',
			link: 'https://github.com/bokhtier19/Portfolio.git',
		},
	];

	return (
		<>
			<div className='flex flex-row-reverse items-center justify-center scroll-mt-24' id='projects'>
				<div className='flex flex-col items-center justify-around my-20 md:flex-row-reverse'>
					<div>
						<h1 className='text-center anton-regular hover-effect'>My Project and Works</h1>
					</div>

					<div className='grid w-3/5 grid-cols-1 gap-6 md:grid-cols-2'>
						{projects.map((project, index) => (
							<div key={index} className='flex flex-col items-center justify-center py-4 text-center transition-all ease-in-out border border-black rounded-lg hover:scale-105 hover:border-2 hover:z-10 hover:cursor-pointer'>
								<h1 className='my-2 text-xl font-bold text-center hover:uppercase'>{project.title}</h1>
								<p className='mx-2 my-2 text-gray-600'>{project.description}</p>
								<div>
									<button onClick={() => window.open(project.link, '_blank')} className='flex justify-center px-4 py-2 my-2 text-sm text-white bg-black border-2 rounded-full '>
										<p className='hover-effect'>Explore More</p>
										<LuArrowUpRight size={20} className='arrow-effect-right' />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProjects;
