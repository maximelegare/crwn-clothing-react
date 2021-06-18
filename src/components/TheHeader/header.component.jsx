// import "./header.styles.scss";
import { LogoContainer, OptionsContainer, OptionDiv, OptionLink, HeaderContainer  } from './header.styles'

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from '../cart/cart/cart-dropdown.component'
import CartIcon from '../cart/cart-icon/cart-icon.component'

import { selectCurrentUser } from '../../redux/user/users.selectors'
import { selectCartVisibility } from '../../redux/cart/cart.selectors'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import {signOutStart} from '../../redux/user/user.actions'
 
const Header = ({currentUser, cartVisibility, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        // console.log(currentUser)
        currentUser
        ?
        <OptionDiv onClick={signOutStart}>SIGN-OUT</OptionDiv>
        :
        <OptionLink to="/signin">SIGN-IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      cartVisibility ?
      (<CartDropdown />)
      :
      null
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartVisibility
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
