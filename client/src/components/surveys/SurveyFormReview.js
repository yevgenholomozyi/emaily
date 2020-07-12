import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import FIELDS from './fields';
import * as actions from '../../actions';

class SurveyFormReview extends Component {

    render() {
        const reviewFields = _.map(FIELDS, ({ name, label }) => {
            return (
                <div key = { name }>
                    <label htmlFor="#">{ label }</label>
                    <div>{ this.props.formValues[name] }</div>
                </div>
            )
        })
        return (
            <Fragment>
                <h5>Please confirm your entries</h5>
                {reviewFields}
                <button
                    className = 'yellow darken-3 btn-flat'
                    onClick = { this.props.onCancel }
                >
                    Back
                </button>

                <button
                    className = 'teal btn-flat right'
                    type = 'submit'
                    onClick = { () => this.props.submitSurvey(this.props.formValues, this.props.history) }
                >
                    Send Survey
                    <i className = 'material-icons right'>email</i>
                </button>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect (mapStateToProps, actions) (withRouter (SurveyFormReview));

