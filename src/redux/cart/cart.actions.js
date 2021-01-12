import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartActionTypes from "./cart.types";

export const togglecartHidden= () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem =item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart= item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
export const removeItem =  item =>({
    type: CartActionTypes.Remove_ITEM,
    payload: item
})
