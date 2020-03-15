import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

const CartWrapper = styled.div`
    display: flex;
`

const CartSummary = styled.div`
    height: 100%;
    display: flex;
    font-weight: bold;
`

const CheckoutButton = styled.button`
    padding: 1em;
    font-weight: 700;
    background-color: #F51767;
    color: white;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
`

const Cart = () => {
    return (
        <CartWrapper>
            <CartSummary className="snipcart-summary">
                <CheckoutButton className="snipcart-checkout">Checkout items</CheckoutButton>
            </CartSummary>
        </CartWrapper>        
    )
}


export default Cart