import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
	const socials = [
		{
			Media: 'Twitter',
			Link: '',
			Icon: <BsTwitterX color='white' size={40} />,
		},
		{
			Media: 'GitHub',
			Link: 'https://github.com/bokhtier19',
			Icon: <FaGithub color='white' size={40} />,
		},
		{
			Media: 'Instagram',
			Link: '',
			Icon: <FaInstagramSquare color='white' size={40} />,
		},
		{
			Media: 'YouTube',
			Link: '',
			Icon: <FaYoutube color='white' size={40} />,
		},
		{
			Media: 'WhatsApp',
			Link: 'https://wa.link/9a3nd5',
			Icon: <FaWhatsappSquare color='white' size={40} />,
		},
		{
			Media: 'Gmail',
			Link: 'mailto:bokhtierdev19@gmail.com',
			Icon: <SiGmail color='white' size={40} />,
		},
	];

	return (
		<>
			<div className='bg-black'>
				<div className='flex py-8 gap-4 justify-center'>
					{socials
						.filter((social) => social.Link) // Only include socials with a Link
						.map((social, index) => (
							<a key={index} href={social.Link} target='_blank' rel='noopener noreferrer'>
								{social.Icon}
							</a>
						))}
				</div>

				<div className='flex justify-center'>
					<hr className='flex items-center w-2/3 my-2 bg-white' />
				</div>

				<div>
					<p className='text-center text-xs text-white tracking-wider py-4'>&copy; 2024 Elius Bokhtier. All rights reserved.</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
