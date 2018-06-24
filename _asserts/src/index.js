require('../style/index.scss');

import 'babel-polyfill';
import 'whatwg-fetch';

import $ from 'jquery';
import _ from 'lodash';
import React 	from 'react';
import ReactDOM from 'react-dom';

import ConfigStore from './store-config.js';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReduxModal 	from 'react-redux-modal'

import routes from './route/routes';

const store = ConfigStore();

const Utensil = document.querySelector('.container');

ReactDOM.render(
	<Provider store={ store }>
		<div className="container">
			<Router history={ browserHistory } routes={ routes } />
			<ReduxModal />
		</div>
	</Provider>, Utensil
);