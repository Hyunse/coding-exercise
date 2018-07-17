import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        <h3>This is Feature Component</h3>
      </div>   
    );
  }
}

export default requireAuth(Feature);