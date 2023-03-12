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
				<Home/>
			) : (
				<Register />
			)}
		</>
	);
}

export default App;
