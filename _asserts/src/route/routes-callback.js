import ConfigStore from '../store-config';
import { GetUsersThunk } from '../actions/index';

const curStore = ConfigStore();

const whenGoUserInfoPage = () =>{
	console.log('called.');
	curStore.dispatch(GetUsersThunk());
}

export default whenGoUserInfoPage;