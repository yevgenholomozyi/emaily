import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { reduxForm, Field} from 'redux-form';
import _ from 'lodash';
import SurveyField from './SurveyField';
import validateEmails from '../../utilities/validateEmails';
import FIELDS from './fields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ( { label, name } ) => {
            return <Field 
                    component = { SurveyField } 
                    type = 'text'
                    label = { label }
                    name = { name }
                    key = { name }
                 />
        })
    }
    render() {
        return (
            <div>
                <form action="#" onSubmit = { this.props.handleSubmit( this.props.onSurveySubmit ) }>
                    {this.renderFields()}
                    <button 
                        type = 'submit'
                        className = 'teal btn-flat right white-text'
                        >
                            Next
                            <i className = 'material-icons right'>done</i>
                    </button>
            
                    <Link
                        to = '/surveys'
                        className = 'red lighten-2 btn-flat left white-text'
                    >
                        Cancel
                        <i className = 'material-icons right'>cancel</i>
                    </Link>
                </form>
            </div>
        )
    }

}

 function validate (values) { // values are the values of the form
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a value`
        }
    });

    return errors
} 
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
}) (SurveyForm);