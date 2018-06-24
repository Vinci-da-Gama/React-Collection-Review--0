import { combineReducers } from 'redux';
import BooklistReducer from './reducer_books';
import ReceivedUsers from './reducer_users.js';
import {reducer as modalReducer} from 'react-redux-modal'

const RootReducer = combineReducers({
	booksCollection: BooklistReducer, 
	users: ReceivedUsers, 
	modals: modalReducer
});

export default RootReducer;