import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
  // Render Field
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    return (
      <fieldset>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </fieldset>
    );
  }

  onSubmit = (values) => {
    // Submit values for Sign up
  }

  render() {
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Email" name="email" component={this.renderField} />
        <Field label="Password" name="password" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
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

export default reduxForm({})(connect(null)(Signin));
