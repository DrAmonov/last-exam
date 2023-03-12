import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TopHeader from '../../components/TopHeader/TopHeader';
import CardsPro from '../../components/Cards/CardsPro';
import Footer from '../../components/Footer/Footer';

function Products() {
	return (
		<>
			<div className="bg-[#FAFBFC]">
				<div className="">
					<TopHeader />
					<Header />
					<div className="container">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? ' text-[#53B175] mr-3'
									: 'no-underline text-black mr-3'
							}>
							Bosh Sahifa
						</NavLink>
						<span>/</span>
						<NavLink
							to="/products"
							className={({ isActive }) =>
								isActive
									? ' text-[#53B175] ml-3'
									: 'no-underline text-black ml-3'
							}>
							Mahsulotlar
						</NavLink>
						<div>
							<h4 className="h3 mt-4">Mahsulotlar</h4>
						</div>
						<CardsPro/>
					</div>
					<Footer/>
				</div>
			</div>
		</>
	);
}

export default Products;
