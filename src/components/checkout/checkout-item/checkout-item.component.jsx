import { connect } from "react-redux";
import {
  addCartItem,
  clearCartItem,
  deleteCartItem,
} from "../../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearCartItem, addCartItem, deleteCartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
