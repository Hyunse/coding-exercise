import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  // Render Field
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    return (
      <fieldset>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </fieldset>
    );
  }

  onSubmit = (formProps) => {
    // Submit values for Sign up
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="Email"
          name="email"
          type="text"
          autoComplete="none"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="none"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

// Validate Form values
function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Fill Email';
  }

  if (!values.password) {
    errors.password = 'Fill Password';
  }

  return errors;
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
