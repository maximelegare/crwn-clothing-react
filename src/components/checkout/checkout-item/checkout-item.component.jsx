import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { deleteCartItem, decreaseItemQuantity, addCartItem } from "../../../redux/cart/cart.actions";


const CheckoutItem = ({ cartItem, deleteCartItem, decreaseQuantity, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>

      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => deleteCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
  decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item)),
  addItem:(item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
