import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../actions';

class UserLogin extends Component {
  renderField(field) {
    console.log(field);
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );

    // const { meta: {touched, error} } = field;
    // const className = `form-group ${ touched && error ? 'has-error' : ''}`;
    // const errorText = {
    //   color: `${ touched && error ? 'red' : '#333'}`
    // }

    // return (
    //   <div className={className}>
    //     <label>{field.label}</label>
    //     <input
    //       className="form-control"
    //       type="text"
    //       {...field.input}
    //     />
    //     <div style={errorText}>
    //       {/* show error */}
    //       {touched ? error : ''}
    //     </div>
    //   </div>
    // );
  }

  onSubmit() {
    // submit
    this.props.loginUser();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="userId" name="userId" component={this.renderField} />
          <Field
            label="userPassword"
            name="userPassword"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  return {};
}

export default reduxForm({
  validate: validate,
  form: 'UserLoginForm'
})(
  connect(
    null,
    { loginUser }
  )(UserLogin)
);
