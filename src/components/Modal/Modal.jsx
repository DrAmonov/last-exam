import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jpp from '../../assets/images/card1.png';
import icon from '../../assets/images/icon.svg';
import { ModalAccordion } from '../ModalAccordion/ModalAccordion';
import { addToCart } from '../../features/CartSilce';
import { useDispatch } from 'react-redux';

function Modal({ className }) {

	const handleClick = () => {
		className={}
	}

	return (
		<div className={className}>
			<div className=" absolute mt-[-450px] ml-52 bg-white">
				<div className="w-[900px]  rounded-2xl shadow">
					<button onClick={() => handleClick()} className="bg-slate-200 pb-1 rounded-full px-[10px] font-semibold mt-3 ml-[855px]">
						x
					</button>
					<div className="p-20">
						<div className="flex gap-5 items-center">
							<div>
								<img src={jpp} alt="" />
							</div>
							<div>
								<h3 className="h3">Rastaropsha MAX</h3>
								<div className="flex gap-1 mt-3 mb-4">
									<img src={icon} alt="" className="h-4" />
									<img src={icon} alt="" className="h-4" />
									<img src={icon} alt="" className="h-4" />
									<img src={icon} alt="" className="h-4" />
									<img src={icon} alt="" className="h-4" />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex gap-3 items-center">
										<button className="border pb-2 px-2 rounded-xl font-bold text-[#53B175] text-4xl">
											+
										</button>
									</div>
									<div className="font-bold text-[#53B175] text-xl m-0 p-0">
										16 000 uzs
									</div>
								</div>
								<div className="mt-4">
									<ModalAccordion />
								</div>
								<div className="mt-4 flex justify-between items-center">
									<div>
										<p className="font-semibold">Og'irligi</p>
									</div>
									<div>
										<button className="font-semibold bg-slate-200 p-1 rounded">
											100 gr
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="bg-[#53B175] text-white w-[200px] pb-1 rounded-full px-[10px] font-semibold mb-3 ml-[680px]">
						Savatga qo'shish
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
