import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({price})=>{
    const priceForStripe= price*100;
    const publishableKey= 'pk_test_51I9FlvDVnKAwff094s1BtHxj8ouUgD9KEXN0tKzXdokd8GsQylyWhbczkE6AbSWvoMHb2a2as6fjmqp8LvoTcgyG00wL5C6yh7';
    const onToken= token =>{
        console.log(token);
        alert("payment Successful")
    }
    
    return(
        <StripeCheckout
        label='Pay Now'
        name='Shiva Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />

    )
}
export default StripeCheckoutButton;