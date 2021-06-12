import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

// import { toggleCartVisibility } from "../../../redux/cart/cart.actions";
import { selectCurrentUser } from '../../../redux/user/users.selectors'


import "./cart-dropdown.styles.scss";
import { toggleCartVisibility } from "../../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => (
  
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
        onClick={
          () => {
          if(currentUser){
            history.push('/checkout')
          }else{
            history.push('signin')
          }
          dispatch(toggleCartVisibility())
        }
      
      }
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
    
  
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser:selectCurrentUser
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
