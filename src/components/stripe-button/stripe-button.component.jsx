import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100;
    const PublishableKey = 'pk_test_51HztRwGJsAZhMtlZdROyRcOCtLPHz38VwdRk0ZpMGBHb8tqZlmORxBe1xHoRp6zZcoFUyOVINzyB5AkA8ao5UAEh00WfFUlZDg';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }
    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'Kris Sneakers Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {PriceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {PublishableKey}
        />
    );
};

export default StripeCheckoutButton;