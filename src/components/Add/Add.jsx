import React from 'react';
import nature from '../../assets/images/nature.png'

function Add() {
	return (
		<div className=" mt-28">
			<div className="container">
				<div className='bg-ff bg-[#3C3C3C] pt-5 px-2 pb-9 rounded-lg'>
          <div className='flex gap-2 items-start'>
            <h3 className='text-white font-semibold'>Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h3>
            <img src={nature} alt=""  className='mt-[-40px]'/>
          </div>
        </div>
			</div>
		</div>
	);
}

export default Add;
