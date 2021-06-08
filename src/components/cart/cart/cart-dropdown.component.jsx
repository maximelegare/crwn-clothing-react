import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleCartVisibility } from "../../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  
    <div className="cart-dropdown">
      <div className={`${!cartItems.length ? "empty" : ""} cart-items`}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
    
  
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
