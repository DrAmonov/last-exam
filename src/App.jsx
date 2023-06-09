import React from 'react';
import Register from './pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LikePage from './pages/LikePage/LikePage';
import LogIn from './pages/LogIn/LogIn';
import Products from './pages/Products/Products';
import ShopingPage from './pages/ShopingPage/ShopingPage';

function App() {
	const localData = localStorage.getItem('token');
	return (
		<>
			{localData ? (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/shopingpage" element={<ShopingPage />} />
					<Route path="/likepage" element={<LikePage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<LogIn />} />
				</Routes>
			) : (
				<Register />
			)}
		</>
	);
}

export default App;
