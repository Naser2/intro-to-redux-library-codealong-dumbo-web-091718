
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

 /* eslint-disable no-underscore-dangle */
const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 /* eslint-enable */

ReactDOM.render(
		<App store={store}/>,
	document.getElementById('root')
);