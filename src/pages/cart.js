import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

const CartWrapper = styled.div`
    display: flex;
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

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: process.env.GATSBY_BUTTON_SKU_ID, quantity: 1 }],
    successUrl: `${window.location.origin}/page-2/`,
    cancelUrl: `${window.location.origin}/`,
  })

  if (error) {
    console.warn('Error:', error)
  }
}

const Cart = () => {
    return (
        <CartWrapper>
            <CheckoutButton onClick={redirectToCheckout}>Checkout items</CheckoutButton>
        </CartWrapper>        
    )
}


export default Cart