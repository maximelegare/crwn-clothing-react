import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartVisibility } from '../../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { selectCartCount } from '../../../redux/cart/cart.selectors'


const CartIcon = ({toggleCartVisibility, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartVisibility}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
  })

const mapStateToProps = (state) => ({
    itemCount: selectCartCount(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)