import { ASYN_THUNK_TYPE } from '../actions/index';

// const InitState = { all: [] }

const ReceivedUsers = (state = null, action) => {
	console.log('6 -- action is: ', action);
    switch (action.type) {
        case ASYN_THUNK_TYPE:
            return action.payload;
        default:
            return state;
    }
}

export default ReceivedUsers;