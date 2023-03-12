import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ProductReducer, { productsFetch } from './features/Productslice';
import { productsApi } from './features/ProductApi';
import CartReducer, { getTotals } from './features/CartSilce';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore({
	reducer: {
		producs: ProductReducer,
		cart: CartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch())
store.dispatch(getTotals())

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ToastContainer />
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
