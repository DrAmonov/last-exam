import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LikePage from './pages/LikePage/LikePage';
import LogIn from './pages/LogIn/LogIn';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import ShopingPage from './pages/ShopingPage/ShopingPage';

function Homee() {
  return (
    <>
      <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/shopingpage" element={<ShopingPage />} />
					<Route path="/likepage" element={<LikePage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<LogIn />} />
				</Routes>
    </>
  )
}

export default Homee