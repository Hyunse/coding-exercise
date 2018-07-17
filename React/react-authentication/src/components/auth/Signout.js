import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        <h3>Bye bye</h3>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);