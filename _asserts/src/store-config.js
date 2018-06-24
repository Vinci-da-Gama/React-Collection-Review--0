import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gReducers from './reduxers';

const ConfigStore = () => {
    return createStore(
        gReducers,
        applyMiddleware(thunk)
    );
};

export default ConfigStore;