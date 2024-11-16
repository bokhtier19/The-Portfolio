import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
	const [isSmall, setIsSmall] = useState(false);

	return (
		<>
			<div className='sticky bg-black top-0'>
				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center justify-around tracking-wider py-4'>
					<ul className='flex items-center gap-8 uppercase text-white'>
						<NavHashLink smooth to={'#'}>
							Home
						</NavHashLink>
						<NavHashLink smooth to={'#projects'}>
							My Projects
						</NavHashLink>
						<NavHashLink smooth to={'#about'}>
							About
						</NavHashLink>
						<NavHashLink smooth to={'#contact'}>
							Contact
						</NavHashLink>
					</ul>
				</div>

				{/* Mobile Navigation */}
				<div className={`${isSmall ? 'hidden' : 'block'} flex md:hidden justify-end mr-4`} onClick={() => setIsSmall(!isSmall)}>
					<MdMenu size={50} color='white' />
				</div>
			</div>
			{/* Mobile Menu */}
			<div className={`${isSmall ? 'block' : 'hidden'} md:hidden bg-black sticky top-0 left-0 right-0 z-50 transition-all ease-in-out`}>
				<div onClick={() => setIsSmall(!isSmall)} className='flex items-end justify-end  mr-4'>
					<RxCross2 color='white' size={50} />
				</div>
				<ul className='flex flex-col items-center gap-8 uppercase text-white py-8'>
					<NavHashLink smooth to={'#'} onClick={() => setIsSmall(!isSmall)}>
						Home
					</NavHashLink>
					<NavHashLink smooth to={'#projects'} onClick={() => setIsSmall(!isSmall)}>
						My Projects
					</NavHashLink>
					<NavHashLink smooth to={'#about'} onClick={() => setIsSmall(!isSmall)}>
						About
					</NavHashLink>
					<NavHashLink smooth to={'#contact'} onClick={() => setIsSmall(!isSmall)}>
						Contact
					</NavHashLink>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
