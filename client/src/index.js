import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/reset.css";
import "./style/style.scss";
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

