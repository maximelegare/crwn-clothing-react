
import {connect} from 'react-redux'
import { deleteCartItem } from '../../../redux/cart/cart.actions'
import './checkout-item.styles.scss'




const CheckoutItem = ({cartItem, deleteCartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => deleteCartItem(cartItem)}>&#10005;</div>
    </div>
)}



const mapDispatchToProps = dispatch => ({
   deleteCartItem : item => dispatch(deleteCartItem(item)) 
})

export default connect(null ,mapDispatchToProps)(CheckoutItem)
