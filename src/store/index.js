import { createStore} from 'redux';

//reducer function takes staed and action as input parameters
const reducerFn = (state = { counter:0}, action) => {
    return state;

}
// createStore needs a reducer functions. so create a reducerFn before this
const store = createStore(reducerFn);

export default store;