import React from 'react';

function Button() {
	return (
		<div className="bg-white text-black pt-2">
			<div className="container">
				<div className='flex justify-between items-center'>
					<div>
						<p className='text-[12px]'>
							© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. Saytdan <br />
							olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish
							majburiy.
						</p>
					</div>
					<ul className='flex gap-3'>
            <li><a href="#" className='text-black no-underline text-[12px]'>Bosh sahifa</a></li>
            <li><a href="#" className='text-black no-underline text-[12px]'>Biz haqimizda</a></li>
            <li><a href="#" className='text-black no-underline text-[12px]'>Yangiliklar</a></li>
          </ul>
				</div>
			</div>
		</div>
	);
}

export default Button;
