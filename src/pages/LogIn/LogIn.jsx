import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/Home';

function LogIn() {
	const handleSubmit = (evt) => {
		evt.preventDefault();

		axios
			.post('https://reqres.in/api/login', {
				email: usernameRef.current.value,
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

	const handleReload = () => {
		return <Home/>
	}

	const usernameRef = useRef();
	const passwordRef = useRef();


	return (
		<div className="w-[340px] mx-auto">
			<div className="bg-slate-200 py-2 rounded-3xl mt-20">
				<Link
					to="/register"
					className="ml-2 bg-white py-1 px-3 rounded-3xl text-[#53B175] no-underline font-semibold">
					Ro'yxatdan o'tish
				</Link>
			</div>
			<form onSubmit={handleSubmit} className="mt-12">
				<input
					ref={usernameRef}
					type="email"
					defaultValue='eve.holt@reqres.in'
					placeholder="Elektron pochta"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Elektron pochta (optinal)"
					className="outline-none text-[14px] pb-2 border-b mt-3 w-[340px]"
				/>
				<button onSubmit={handleReload} className="bg-[#53B175] w-[340px] py-2 text-white font-semibold rounded-3xl mt-16">
					Tizimga kirish
				</button>
			</form>
		</div>
	);
}

export default LogIn;
