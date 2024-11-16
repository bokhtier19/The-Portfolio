import React from 'react';

const Contact = () => {
	return (
		<>
			<div id='contact' className='scroll-mt-20 flex justify-center'>
				<div className='flex flex-col md:flex-row justify-around items-center w-4/5'>
					<div>
						<h1 className='anton-regular text-center'>Please Contact Here</h1>
					</div>

					<div className=''>
						<div className='text-center flex justify-center'>
							<p className='mt-4 text-balance'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
						</div>

						<div>
							<form action='' className='flex flex-col gap-2 p-8 my-4  rounded-lg'>
								<label htmlFor='text' className='ml-4 bg-white'>
									Name
								</label>
								<input type='text' id='name' placeholder='Enter your name' className='px-4 py-2 bg-white border-2 border-black rounded-lg' />
								<label htmlFor='email' className='ml-4 '>
									Email
								</label>
								<input type='email' id='email' placeholder='Enter your email' className='px-4 py-2 bg-white border-2 border-black rounded-lg' />
								<label htmlFor='message' className='ml-4 '>
									Message
								</label>
								<textarea type='text' id='message' placeholder='Enter your message' rows={3} className='px-4 py-2 bg-white border-2 border-black rounded-lg' />
								<div className='flex justify-center mt-4 text-white border-2 bg-black border-black rounded-lg hover:cursor-pointer hover:bg-white hover:border-2  hover:text-black'>
									<button className='flex items-center gap-2 px-8 py-3 text-xs font-bold tracking-wider uppercase'>Submit Form</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
