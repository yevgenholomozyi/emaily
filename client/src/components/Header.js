import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';
class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null: 
            return;
            case false:
            return <li> <a href = '/auth/google'>Login With Google</a> </li>
            default: 
            return <Fragment>
                    <li key = '1' style = {{marginLeft: '30px'}}>
                        <Payments /> 
                    </li>
                    <li key = '2' style = {{margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>
                    <li key = '3'>
                        <a href = '/api/logout'> Logout </a>
                    </li>

                    </Fragment>
        }
    }
    render() {
        return (
            <Fragment>
                <nav>
                    <div className = 'nav-wrapper indigo'>
                        <Link 
                            to = {this.props.auth ? '/surveys' : '/'} 
                            className = 'nav brand-logo'
                            >
                            Emaily 
                        </Link>
                        <ul className = 'right'>
                            {this.renderContent()} 
                        </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
 }

function mapStateToProps ({auth}) {
    return {auth};
}
 export default connect (mapStateToProps) (Header);