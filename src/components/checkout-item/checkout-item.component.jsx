import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  minusItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, clearItem, add, minus }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => minus(cartItem)}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => add(cartItem)}>
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <div className="removal-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  add: item => dispatch(addItem(item)),
  minus: item => dispatch(minusItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
