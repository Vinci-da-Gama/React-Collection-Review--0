import axios from 'axios';

// users
const prefixUrl = 'http://jsonplaceholder.typicode.com/';

export const ASYN_THUNK_TYPE = 'ASYN_THUNK_TYPE';

export const GetUsersThunk = () => {
	const usersUrl = `${prefixUrl}users`;
	// const tempUrl = 'http://reduxblog.herokuapp.com/api/posts?key=12wocao34';
	const usersReq = axios.get(usersUrl);
	console.log('12 -- usersReq is: ', usersReq);

	return (dispatch) => {
		usersReq
		.then(({data}) => {
			console.log('17 -- data is: ', data);
			dispatch({
				type: ASYN_THUNK_TYPE,
				payload: data
			});
		})
		.catch((err) => {
			return err;
		});
	}
}