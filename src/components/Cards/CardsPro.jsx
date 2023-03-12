import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import herat from '../../assets/images/yurak.svg';
import { useGetAllProductsQuery } from '../../features/ProductApi';
import { addToCart } from '../../features/CartSilce';

function Cards() {
	const [value, setValue] = useState([]);
	const [option, setoption] = useState([]);

	const { data, error, isLoading } = useGetAllProductsQuery();

	useEffect(() => {
		fetch('http://localhost:5000/products')
			.then((res) => res.json())
			.then((val) => setValue(val));
	}, []);

  
	const dispatch = useDispatch();
	const history = useNavigate();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		history.push('./cart');
	};

  console.log(value, 'values');
  // console.log(option);

	return (
		<div className="flex justify-between">
			<div className="w-[150px]">
				<select
					onChange={(e) => setoption(e.target.value)}
					className="form-select px-3">
            <option value="all">Barchasi</option>
					{data?.map((opt, i) => (
						<option key={i} value={opt.type}>{opt.type}</option>
					))}
				</select>
			</div>
			<div className="">
				{isLoading ? (
					<p>Is Loading..</p>
				) : error ? (
					<p>An Error</p>
				) : (
					<>
						<div className="grid grid-cols-3 gap-4 mx-5">
							{data?.map((product) => (
								<div
									key={product.id}
									className="border rounded-xl grid-cols-1 border-slate-400">
									<div className="flex items-start">
										<img src={product.img} alt="" />
										<img src={herat} alt="" className="ml-[-30px] mt-3" />
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
										<button className="text-slate-400 no-underline mx-auto flex mt-2">
											{product.btn}
										</button>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Cards;
