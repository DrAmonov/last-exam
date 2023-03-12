import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import heart from '../../assets/images/heart.svg';
import shop from '../../assets/images/shop.svg';

function Header() {
	const { cartTotalQuantity } = useSelector((state) => state.cart);

	return (
		<>
			<div>
				<div className="container py-4">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-4">
							<p className="text-2xl font-semibold mr-28">LOGO</p>
							<div className="flex gap-4 mb-3">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive
											? ' font-semibold underline underline-[15px] text-black'
											: 'text-[#444] no-underline'
									}>
									Bosh sahifa
								</NavLink>
								<NavLink
									to="/products"
									className={({ isActive }) =>
										isActive
											? ' font-semibold underline text-black'
											: 'text-[#444] no-underline'
									}>
									Mahsulotlar
								</NavLink>
							</div>
						</div>
						<div className="flex gap-1 mr-16">
							<NavLink
								to="/likepage"
								className={({ isActive }) =>
									isActive
										? ' bg-[#53B175] rounded-full shadow'
										: 'bg-white rounded-full shadow'
								}>
								<img src={heart} alt="" className="p-2" />
							</NavLink>
							<NavLink
								to="/shopingpage"
								className={({ isActive }) =>
									isActive
										? ' bg-[#53B175] rounded-full shadow'
										: 'bg-white rounded-full shadow'
								}>
								<img src={shop} alt="" className="p-2" />
							</NavLink>
							<span className="ml-[-7px] mt-[-3px] font-bold">
								{cartTotalQuantity}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
