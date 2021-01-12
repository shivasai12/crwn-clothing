import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import ShopPage from "../../pages/shop/shop.component";
import { togglecartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import './cart-icon.styles.scss'

const CartIcon = ({togglecartHidden, itemCount})=>(
    <div className='cart-icon' onClick={togglecartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps= dispatch=>({
    togglecartHidden:() => dispatch(togglecartHidden())
});

const mapStateToProps= createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);