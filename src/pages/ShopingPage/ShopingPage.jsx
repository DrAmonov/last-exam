import React from 'react';
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopHeader from '../../components/TopHeader/TopHeader';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import del from '../../assets/images/delete.svg';
import {
	addToCart,
	decreaseCart,
	getTotals,
	removeFromcart,
} from '../../features/CartSilce';

function ShopingPage() {
	const cart = useSelector((state) => state.cart);
	const distpatch = useDispatch();

	useEffect(() => {
		distpatch(getTotals());
	}, [cart, distpatch]);

	const handleRemoveFromCart = (cartItem) => {
		distpatch(removeFromcart(cartItem));
	};

	const handleDecreaseCart = (cartItem) => {
		distpatch(decreaseCart(cartItem));
	};

	const handleIncreasecart = (cartItem) => {
		distpatch(addToCart(cartItem));
	};

	return (
		<div className="bg-[#FAFBFC]">
			<TopHeader />
			<Header />
			<div className="shoping">
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
							to="/shopingpage"
							className={({ isActive }) =>
								isActive ? ' text-[#53B175]' : 'no-underline text-black'
							}>
							Savatcha
						</NavLink>
					</div>
					<div>
						<h2 className='mt-3 h2'>Savatda {cart.cartTotalQuantity} ta mahsulot bor</h2>
						{cart.cartItems.length === 0 ? (
							<div className="text-center mt-20">
								<h1 className="h1">Savat bo'sh</h1>
								<Link to="/">Bosh sahifaga qaytish</Link>
							</div>
						) : (
							<div className="mt-20 flex justify-between items-start">
								<div>
									{cart.cartItems?.map((cartItem) => (
										<div
											key={cartItem.id}
											className="px-3 mb-2 h-[120px] w-[800px] flex items-center justify-between border rounded-2xl border-slate-400">
											<div>
												<img src={cartItem.img} alt="" className="h-[120px]" />
											</div>
											<div>
												<p className="p-0 m-0">{cartItem.name}</p>
												<p className="p-0 m-0">{cartItem.for}</p>
											</div>
											<div className="flex gap-3 items-center">
												<button
													onClick={() => handleDecreaseCart(cartItem)}
													className="text-slate-300 font-bold text-2xl">
													-
												</button>
												<div className="border-slate-300 border px-2  rounded-lg font-bold mt-1">
													{cartItem.cartQuantity}
												</div>
												<button
													onClick={() => handleIncreasecart(cartItem)}
													className="font-bold text-[#53B175] text-2xl">
													+
												</button>
											</div>
											<div>
												<p className="text-slate-300 line-through p-0">
													{cartItem.eski}
												</p>
												<div className="font-bold text-[#53B175] text-xl m-0 p-0">
													{cartItem.yangi * cartItem.cartQuantity} uzs
												</div>
											</div>
											<div>
												<button onClick={() => handleRemoveFromCart(cartItem)}>
													<img src={del} alt="" />
												</button>
											</div>
										</div>
									))}
								</div>

								<div className="p-2 w-[250px] bg-white rounded-2xl">
									<div className=" flex justify-between items-center text-slate-400">
										<span>Mahsulotlar: </span>{' '}
										<span> {cart.cartTotalAmount} </span>
									</div>
									<div className=" mt-6 flex justify-between items-center text-slate-400">
										<span>Chegirma: </span> <span>0</span>
									</div>
									<div className=" mt-6 flex justify-between items-center text-slate-400">
										<span>Yetkazib berish: </span> <span>15000 uzs</span>
									</div>
									<div className=" mt-6 flex justify-between items-center font-bold">
										<span>Umumiy: </span> {cart.cartTotalAmount +15000} uzs
										<span></span>
									</div>
									<div>
										<button className="bg-[#53B175] block w-full mt-6 py-1 rounded-2xl text-white font-semibold">
											To’lovga o’tish
										</button>
										<button className="bg-slate-300 block w-full mt-6 py-1 rounded-2xl font-semibold">
											Menyuga qaytish
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ShopingPage;
