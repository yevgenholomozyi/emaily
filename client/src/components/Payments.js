import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'
class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            name = 'Emaily'
            description = '$5 for 5 email credit'
            amount = {500} // amount should be in cents, thus 500 cents is $5
            token = {token => this.props.handleToken(token)} // callback function. Post token to the server
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className = 'btn'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect (null, actions) (Payments);