//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Pages
import App from './App';

//Styles
import './styles/base/default.css';
import './styles/base/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
