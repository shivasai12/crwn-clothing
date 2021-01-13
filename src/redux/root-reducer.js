import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


import useReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import  directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootreducer= combineReducers({
    user: useReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootreducer)