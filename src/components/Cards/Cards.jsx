import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { json, useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import {
	addToCart,
	addToLike,
	changeHeartColor,
} from '../../features/CartSilce';
import yurak from '../../assets/images/yurak.svg';
import red from '../../assets/images/red.svg';
import Modal from '../Modal/Modal';

function Cards() {
	const { data, error, isLoading, isLike } = useGetAllProductsQuery();

	const dispatch = useDispatch();
	const history = useNavigate();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		history.push('./cart');
	};

	const [togle, setTogle] = useState(false);

	const handleAddToLike = (product) => {
		dispatch(addToLike(product));
		history.push('./product');
	};

	const [modal, setModal] = useState(false);

	const handleModal = (evt) => {
		setModal((modal) => !modal);
	};

	let openModal = modal ? 'd-block' : 'd-none';

	return (
		<div className="pt-[120px]">
			{isLoading ? (
				<p>Is Loading..</p>
			) : error ? (
				<p>An Error</p>
			) : (
				<>
					<h2 className="h3 wf-bold ml-12 mb-5">
						Mahsulotlarimiz <br /> ro'yxati
					</h2>
					<div className="flex gap-4 mx-5">
						{data?.map((product) => (
							<div
								key={product.id}
								className="border rounded-xl border-slate-400">
								<div className="flex items-start">
									<img src={product.img} alt="" />
									<>
										<img
											onClick={() => handleAddToLike(product)}
											src={yurak}
											alt=""
											className="ml-[-25px] mt-2"
										/>
									</>
								</div>
								<div className="p-2">
									<p className="font-bold m-0 p-0">{product.name}</p>
									<p className="text-[14px] text-slate-400 m-0 p-0">
										{product.for}
									</p>
									<div className="flex items-center justify-between">
										<div className="mt-2">
											<p className="text-[14px] line-through text-slate-400 m-0 p-0">
												{product.eski}
											</p>
											<p className="font-bold text-[#53B175] text-xl m-0 p-0">
												{product.yangi} uzs
											</p>
										</div>
										<div>
											<button
												onClick={() => handleAddToCart(product)}
												className="text-3xl px-[10px] rounded-2xl pb-2 text-white font-bold bg-[#53B175]">
												+
											</button>
										</div>
									</div>
									<button
										onClick={(evt) => handleModal(evt)}
										className="text-slate-400 no-underline mx-auto flex mt-2">
										{product.btn}
									</button>
								</div>
							</div>
						))}
					</div>
				</>
			)}
			<Modal className={openModal} />
		</div>
	);
}

export default Cards;
