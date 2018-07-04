import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

/**
 * Search Bar Component
 * 
 * @class
 */
class SearchBar extends Component {

  constructor(props) {
    super(props);
    
    // Init State
    this.state = { term: '' };

    // Binding This
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Input Change
  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  onFormSubmit(event) {
    // Don't submit Form to Backend
    event.preventDefault();

    // Action
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  // Render
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          // onChange={ (event) => this.onInputChange(event)}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Actions To Props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Connect To Redux
export default connect(null, mapDispatchToProps)(SearchBar);
