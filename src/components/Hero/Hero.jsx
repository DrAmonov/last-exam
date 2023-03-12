import React from 'react';
import Header from '../Header/Header';
import hero from '../../assets/images/hero.png';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';

function Hero() {
	return (
		<>
			<Header />
			<div className="container">
				<div className="text-center pt-28 pb-32">
					<h1 className="text-4xl font-bold">
						Bepul shifokor maslahat kerakmi?
					</h1>
					<p>
						24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br />
						Faqat <span className="text-[#53B175]">mobil ilovada</span>
					</p>
				</div>
				<div className="">
					<img src={hero} alt="" className='mx-auto'/>
				</div>
				<div className=" mt-[-472px] ml-[-30px]">
					<img src={left} alt="" />
				</div>
        <div className=" mt-[-100px] ml-[850px]">
					<img src={right} alt="" />
				</div>
			</div>
		</>
	);
}

export default Hero;
