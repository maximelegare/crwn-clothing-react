import './checkout.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import  CheckoutHeader  from '../../components/checkout/checkout-header/checkout-header.component'
import CheckoutItem from '../../components/checkout/checkout-item/checkout-item.component'


 const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
      <CheckoutHeader />

        {
            cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage) 
