import React from 'react';
import Animations from '../../assets/images/Animations.png';
import tg from '../../assets/images/mess.svg';

function Form() {
	return (
		<div className="form">
			<div className="container">
				<div className="mt-10">
					<div className="pt-[320px] pb-[131px]">
						<div className="flex items-center">
							<div>
								<img src={Animations} alt="" />
							</div>
							<form>
								<p className="text-[#53B175]">Biz bilan bog'lanish</p>
								<h3 className="font-semibold text-xl p-0 m-0">
									So'rovingizni yuboring
								</h3>
								<input
									type="text"
									placeholder="Ism"
									className="block text-[14px] mt-4 outline-none border-b pb-1"
								/>
								<input
									type="email"
									placeholder="Email"
									className="block text-[14px] mt-4 outline-none border-b pb-1"
								/>
								<input
									type="text"
									placeholder="Telefon raqam"
									className="block text-[14px] mt-4 outline-none border-b pb-1"
								/>
								<button className="bg-slate-300 flex gap-3 items-center py-1 px-3 rounded-3xl mt-5 text-[14px] text-[#181725]">
									Xabar yuborish <img src={tg} alt="" />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
