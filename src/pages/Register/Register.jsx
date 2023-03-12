import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function Register() {
	const nameRef = useRef();
	const passwordRef = useRef();

	const handleReload = () => {
		window.location.reload()
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post('https://reqres.in/api/login', {
				email: nameRef.current.value,
				password: passwordRef.current.value,
			})
			.then((data) => {
				if(data.status === 200) {
					localStorage.setItem('token', data.data.token)
				}
			})
			.catch((err) => console.log(err));

		console.log({});
	};

	return (
		<div className="w-[340px] mx-auto">
			<div className="bg-slate-200 py-2 rounded-3xl mt-20">
				<Link
					to="/login"
					className="ml-48 bg-white py-1 px-12 rounded-3xl text-[#53B175] no-underline font-semibold">
					Kirish
				</Link>
			</div>
			<form onSubmit={handleSubmit} className="mt-12">
				<input
					type="text"
					placeholder="Foydalanuvchi nomi"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<input
					type="email"
					ref={nameRef}
					defaultValue="eve.holt@reqres.in"
					placeholder="Elektron pochta (optinal)"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<input
					type="password"
					ref={passwordRef}
					placeholder="Parolni o’ylab toping"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<small className="text-slate-400 mt-8 block text-center">
					“Ro’yxatdan o’tish” tugmasini bosgan holda, Siz{' '}
					<span className="text-[#53B175]">
						Foydalanish shartlarini qabul qilgan xisoblanasiz.
					</span>
				</small>
				<button className="bg-[#53B175] w-[340px] py-2 text-white font-semibold rounded-3xl mt-8">Ro’yxatdan o’tish</button>
			</form>
			<button onClick={() => handleReload()} className="bg-[#53B175] w-[340px] py-2 text-white font-semibold rounded-3xl mt-8">
					Asosiy sahifa
				</button>
		</div>
	);
}

export default Register;
