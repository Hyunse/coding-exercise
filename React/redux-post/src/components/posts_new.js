import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${ touched && error ? 'has-error' : ''}`;
    const errorText = {
      color: `${ touched && error ? 'red' : '#333'}`
    }

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}  
        />
        <div style={errorText}>
          {/* show error */}
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/' className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

// Validate Form Values
function validate(values) {

  const errors = {};

  if(!values.title) {
    errors.title = 'Fill Title';
  }
  
  if(!values.categories) {
    errors.categories = 'Fill Categories';
  }

  if(!values.content) {
    errors.content = 'Fill Content';
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
}
)(
  connect(null, { createPost })(PostsNew)
);