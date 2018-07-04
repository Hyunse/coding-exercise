import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Call an Event Creator

    // Save a comment

    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>CommentBox Area</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
