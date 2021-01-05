import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import ShopPage from "../../pages/shop/shop.component";
import { togglecartHidden } from "../../redux/cart/cart.actions.js";

import './cart-icon.styles.scss'

const CartIcon = ({togglecartHidden})=>(
    <div className='cart-icon' onClick={togglecartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);
const mapDispatchToProps= dispatch=>({
    togglecartHidden:() => dispatch(togglecartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);