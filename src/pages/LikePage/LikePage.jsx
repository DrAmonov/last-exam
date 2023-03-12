import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TopHeader from '../../components/TopHeader/TopHeader';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import del from '../../assets/images/delete.svg';
import {
	addToCart,
	decreaseCart,
	getTotals,
	removeFromcart,
	removeFromLike
} from '../../features/CartSilce';

function LikePage() {
	const cart = useSelector((state) => state.cart);
	const distpatch = useDispatch();

	useEffect(() => {
		distpatch(getTotals());
	}, [cart, distpatch]);

	const handleremoveFromLike = (likeItem) => {
		distpatch(removeFromLike(likeItem));
	};

	const handleDecreaseCart = (likeItem) => {
		distpatch(decreaseCart(likeItem));
	};

	const handleIncreasecart = (likeItem) => {
		distpatch(addToCart(likeItem));
	};

	return (
		<div>
			<TopHeader />
			<Header />
			<div className="">
				<div className="container">
					<div className="flex gap-3">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? ' text-[#53B175]' : 'no-underline text-black'
							}>
							Bosh Sahifa
						</NavLink>
						<span>/</span>
						<NavLink
							to="/likepage"
							className={({ isActive }) =>
								isActive ? ' text-[#53B175]' : 'no-underline text-black'
							}>
							Sevimli mahsulotlar
						</NavLink>
					</div>
					<h3 className="h3 mt-4">Sevimli mahsulotlarim</h3>
					<div>
						<div></div>
					</div>
				</div>
			</div>
			<div className="container">
				{cart.likeItem.length == 0 ? (
					<div className="text-center mt-20">
						<h1 className="h1">Savat bo'sh</h1>
						<Link to="/">Bosh sahifaga qaytish</Link>
					</div>
				) : (
					<div className="mt-20">
						<div>
							{cart.likeItem?.map((likeItems) => (
								<div
									key={likeItems.id}
									className="px-3 mb-2 h-[120px] w-full flex items-center justify-between border rounded-2xl border-slate-400">
									<div>
										<img src={likeItems.img} alt="" className="h-[120px]" />
									</div>
									<div>
										<p className="p-0 m-0">{likeItems.name}</p>
										<p className="p-0 m-0">{likeItems.for}</p>
									</div>
									<div className="flex gap-3 items-center">
										<button
											onClick={() => handleDecreaseCart(likeItems)}
											className="text-slate-300 font-bold text-2xl">
											-
										</button>
										<div className="border-slate-300 border px-2  rounded-lg font-bold mt-1">
											{likeItems.cartQuantity}
										</div>
										<button
											onClick={() => handleIncreasecart(likeItems)}
											className="font-bold text-[#53B175] text-2xl">
											+
										</button>
									</div>
									<div>
										<p className="text-slate-300 line-through p-0">
											{likeItems.eski}
										</p>
										<div className="font-bold text-[#53B175] text-xl m-0 p-0">
											{likeItems.yangi * likeItems.cartQuantity} uzs
										</div>
									</div>
									<div>
										<button onClick={() => handleremoveFromLike(likeItems)}>
											<img src={del} alt="" />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default LikePage;
