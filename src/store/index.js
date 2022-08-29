import { configureStore } from '@reduxjs/toolkit';

//reducer function takes staed and action as input parameters
const reducerFn = (state = { counter:0}, action) => {

}
// createStore needs a reducer functions. so create a reducerFn before this
const store = configureStore(reducerFn);

export default store;