import { combineReducers } from 'redux';
import productReducer from './productReducers';
import { cartReducer } from './cartReducers';

const rootReducer = combineReducers({
    product: productReducer,
    shop: cartReducer
});

export default rootReducer;