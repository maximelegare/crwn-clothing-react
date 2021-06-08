import "./header.styles.scss";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from 'react-redux'
import CartDropdown from '../cart/cart/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/users.selectors'
import { selectCartVisibility } from '../../redux/cart/cart.selectors'

import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart/cart-icon/cart-icon.component'

const Header = ({currentUser, cartVisibility}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        // console.log(currentUser)
        currentUser
        ?
        <div className="option" onClick={() =>auth.signOut()}>SIGN-OUT</div>
        :
        <Link className="option" to="/signin">SIGN-IN</Link>
      }
      <CartIcon />
    </div>
    {
      cartVisibility ?
      (<CartDropdown />)
      :
      null
    }
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartVisibility
})



export default connect(mapStateToProps)(Header);
