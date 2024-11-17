import React from 'react';
import { FaCode } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const AboutMe = () => {
	return (
		<>
			<div className='flex justify-center my-20 scroll-mt-24' id='about'>
				<div className='flex flex-col items-center md:flex-row md:justify-around'>
					<div className='text-center'>
						<h1 className='anton-regular hover-effect'>About Me</h1>
					</div>
					<div className='w-5/6 text-center md:w-3/5'>
						<div>
							<p className='text-center'>I am a Frontend Developer with 6 months of experience in React.js. I have built several projects and am eager to apply my skills and grow in a professional environment.</p>
						</div>

						<div className='flex flex-col justify-around gap-4 my-8 md:flex-row'>
							<div className='flex-1 p-4 transition-all ease-in-out border-2 border-gray-600 rounded-md hover:scale-110 hover:cursor-pointer'>
								<div className='flex items-center justify-center'>
									<FaCode size={40} />
								</div>
								<p className='my-2 text-xl font-bold text-center'>Languages</p>
								<p className='text-center'>HTML, CSS, Javascript, React Js, Next Js</p>
							</div>
							<div className='flex-1 p-4 transition-all ease-in-out border-2 border-gray-600 rounded-md hover:scale-110 hover:cursor-pointer'>
								<div className='flex items-center justify-center'>
									<FaGraduationCap size={40} />
								</div>
								<p className='my-2 text-xl font-bold text-center'>Education</p>
								<p className='text-center'>B.Tech in ECE , AMU - 2022</p>
							</div>

							<HashLink smooth to={'#projects'} className='flex-1 p-4 transition-all ease-in-out border-2 border-gray-600 rounded-md hover:scale-110 hover:cursor-pointer'>
								<div>
									<div className='flex items-center justify-center'>
										<FaFolderOpen size={40} />
									</div>
									<p className='my-2 text-xl font-bold text-center'>Projects</p>
									<p className='text-center'>Built a few personal projects</p>
								</div>{' '}
							</HashLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
