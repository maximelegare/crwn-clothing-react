import './stripe-button.styles.scss'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publicKey = 'pk_test_51J1YF3BCwVrA7dUdCeXNRY3VgQ11oqTND8bvWVMSYSDJNzVPdL4ElKkMSpeKsF31pJIDxg6cCC9NxRInWxrjOvdf00qE4FiN72'

    const onToken = (token) =>{
        console.log(token)
        alert('payment sucessfull')
    } 

    return(
        <StripeCheckout 
        name="CRWN CLOTHING ltd."
        description={`Your total is $${price}`}
        label="Pay Now"
        panelLabel="Pay Now"
        billingAddress
        shippingAddress
        token={onToken}
        image="https://svgshare.com/i/CUz.svg"
        amount={priceForStripe}
        stripeKey={publicKey}
        />
    )
}

export default StripeCheckoutButton