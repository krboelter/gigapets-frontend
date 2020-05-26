import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './App';
import * as serviceWorker from './serviceWorker';

import UsersReducer from './redux/UsersReducer'

const store = createStore{UsersReducer, thunk, logger}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
