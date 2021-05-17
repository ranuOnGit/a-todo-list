import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { TodoReducer } from './reducer';

const store = createStore(TodoReducer, applyMiddleware(thunk));

export default store;
