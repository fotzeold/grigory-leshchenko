import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './services/scrollToTop';

const firebaseConfig = {
	apiKey: "AIzaSyDSIF7Aeo3UCPXOfpN9kDzl_ZuRLrM1Q30",
	authDomain: "grigory-leshchenko.firebaseapp.com",
	databaseURL: "https://grigory-leshchenko-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "grigory-leshchenko",
	storageBucket: "grigory-leshchenko.appspot.com",
	messagingSenderId: "1039196367252",
	appId: "1:1039196367252:web:65f3fe95dfc732ec914781",
	measurementId: "G-SPGNYMMVH9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

