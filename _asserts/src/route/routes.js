import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IdxApp 	from '../components/idxApp';
import Idx 		from '../containers/idx.js';
import Else 	from '../containers/else';
import UserInfo from '../containers/userinfo-routeOnEnter';
import RRmodal 	from '../containers/myModal.js';
import AnimationSampleComponent from '../components/animation-css-transition-group';
import NoFound 	from '../components/404nofound';

// react-route onEnter callback Function
import { whenGoUserInfoPage } from './routes-callback.js';

export default (
	<Route path="/" component={IdxApp}>
		<IndexRoute component={Idx} />
		<Route path="userslist" component={UserInfo} onEnter={whenGoUserInfoPage} />
		<Route path="rr-Modal" component={RRmodal} />
		<Route path="animation" component={AnimationSampleComponent} />
		<Route path="else" component={Else} />
		<Route path="*" component={NoFound} />
	</Route>
);