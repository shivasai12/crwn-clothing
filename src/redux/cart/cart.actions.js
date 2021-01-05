import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartActionTypes from "./cart.types";

export const togglecartHidden= () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem =item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
