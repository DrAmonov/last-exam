import React from 'react';
import { Link } from 'react-router-dom';
import flag from '../../assets/images/flag.svg';
import loc from '../../assets/images/loc.svg';
import user from '../../assets/images/user.svg';

function TopHeader() {
	return (
		<div className="bg-[#DBEFE3]">
			<div className="container pt-[9px]">
				<nav className="flex justify-between">
					<ul className="p-0 m-0 flex text-[12px] gap-3">
						<li>
							<a href="#" className="text-decoration-none text-[#505050]">
								Mahsulotlar katalogi
							</a>
						</li>
						<li>
							<a href="#" className="text-decoration-none text-[#505050]">
								Foto-lavhalar
							</a>
						</li>
						<li>
							<a href="#" className="text-decoration-none text-[#505050]">
								Yetkazib berish va to'lash
							</a>
						</li>
						<li>
							<a href="#" className="text-decoration-none text-[#AB7A19]">
								Aksiya
							</a>
						</li>
						<li>
							<a href="#" className="text-decoration-none text-[#53B175]">
								Yangi
							</a>
						</li>
					</ul>
					<div className="flex gap-3 items-start text-[12px]">
						<select className="rounded outline-none  w-[41px]">
							<option value="uzb">uzb</option>
						</select>
						<p className="text-[#B0B7C3]">|</p>
						<p className="flex gap-2">
							Toshkent shahar <img src={loc} alt="" />{' '}
						</p>
						<p className="text-[#B0B7C3]">|</p>
						<Link to="/login" className="flex gap-2 no-underline text-black">
							Kirish <img src={user} alt="" />{' '}
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default TopHeader;
