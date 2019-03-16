import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { ProductProvider } from './Context/context';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceworker/serviceWorker';

ReactDOM.render(
	<ProductProvider>
		<Router>
			<App />
		</Router>
	</ProductProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
