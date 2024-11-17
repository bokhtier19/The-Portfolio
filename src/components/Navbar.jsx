import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { MdMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
	const [isSmall, setIsSmall] = useState(false);

	return (
		<>
			<div className='sticky top-0 bg-black'>
				{/* Desktop Navigation */}
				<div className='items-center justify-around hidden py-4 text-sm font-semibold tracking-wider md:flex'>
					<ul className='flex items-center gap-8 text-white uppercase'>
						<NavHashLink smooth to={'#'} className={`hover-effect`}>
							Home
						</NavHashLink>
						<NavHashLink smooth to={'#projects'} className={`hover-effect`}>
							My Projects
						</NavHashLink>
						<NavHashLink smooth to={'#about'} className={`hover-effect`}>
							About
						</NavHashLink>
						<NavHashLink smooth to={'#contact'} className={`hover-effect`}>
							Contact Me
						</NavHashLink>
					</ul>
				</div>

				{/* Mobile Navigation */}
				<div className={`${isSmall ? 'hidden' : 'block'} flex md:hidden justify-end mr-4 hover:cursor-pointer`} onClick={() => setIsSmall(!isSmall)}>
					<MdMenu size={50} color='white' />
				</div>
			</div>
			{/* Mobile Menu */}
			<div className={`${isSmall ? 'block' : 'hidden'} md:hidden bg-black sticky p-4 rounded-md top-0 left-0 right-0 z-50 transition-all ease-in-out`}>
				<div onClick={() => setIsSmall(!isSmall)} className='flex items-end justify-end mr-4 hover:cursor-pointer'>
					<RxCross2 color='white' size={50} />
				</div>
				<ul className='flex flex-col items-center gap-8 py-8 text-white uppercase border rounded-lg'>
					<NavHashLink smooth to={'#'} onClick={() => setIsSmall(!isSmall)} className={`border-b`}>
						Home
					</NavHashLink>
					<NavHashLink smooth to={'#projects'} onClick={() => setIsSmall(!isSmall)} className={`border-b`}>
						My Projects
					</NavHashLink>
					<NavHashLink smooth to={'#about'} onClick={() => setIsSmall(!isSmall)} className={`border-b`}>
						About
					</NavHashLink>
					<NavHashLink smooth to={'#contact'} onClick={() => setIsSmall(!isSmall)} className={`border-b`}>
						Contact
					</NavHashLink>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
