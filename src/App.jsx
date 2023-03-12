import { Route, Routes } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import Home from './pages/Home/Home';
import LikePage from './pages/LikePage/LikePage';
import LogIn from './pages/LogIn/LogIn';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import ShopingPage from './pages/ShopingPage/ShopingPage';

function App() {
	const localData = localStorage.getItem('token');
	return (
		<>
			{localData ? (
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/shopingpage" element={<ShopingPage />} />
					<Route path="/likepage" element={<LikePage />} />
					<Route path="/register" element={<Register />} />
					<Route path={'/modal'} element={<Modal />} />
					<Route path="/login" element={<LogIn />} />
				</Routes>
			) : (
				<LogIn />
			)}
		</>
	);
}

export default App;
