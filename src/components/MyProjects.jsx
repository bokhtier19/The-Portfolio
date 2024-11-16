import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const MyProjects = () => {
	const projects = [
		{
			title: 'Bark and Brawl',
			description: 'This project showcases my React skills with AI images using ReactJS, Tailwind CSS, and is a fun project.',
			link: 'https://github.com/bokhtier19/Bark-and-Brawl.git',
		},
		{
			title: 'Story-Site',
			description: 'This is me Trying to clone a story writing website PRATILIPI.',
			link: 'https://github.com/bokhtier19/Story-Site.git',
		},
		{
			title: 'E-Comm Web',
			description: 'A project of an e-commerce website using React.js, Tailwind CSS, and Node.js, a bit based on a tutorial.',
			link: 'https://github.com/bokhtier19/Ecom-WEB.git',
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
				<div className='flex flex-col items-center  justify-around md:flex-row-reverse my-20'>
					<div>
						<h1 className='anton-regular text-center'>My Project and Works</h1>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 w-3/5 gap-4'>
						{projects.map((project, index) => (
							<div key={index} className='border border-black rounded-lg text-center justify-center flex flex-col items-center py-4'>
								<h1 className='my-2 text-xl font-bold text-center'>{project.title}</h1>
								<p className='my-2 mx-2 text-gray-600'>{project.description}</p>
								<div>
									<button onClick={() => window.open(project.link, '_blank')} className='bg-black text-white py-2 px-4 rounded-lg my-2 flex justify-center'>
										View Project
										<LuArrowUpRight size={20} />
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
