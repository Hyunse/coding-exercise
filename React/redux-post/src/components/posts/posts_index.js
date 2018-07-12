import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      const postUrl = `/posts/${post.id}`; 
      return (
        <Link to={postUrl} key={post.id}>
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>

        <div className="top-btn text-right">
          <Link to="/user/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }

};

function mapStateToProps({ posts }) {
  return { posts };
} 

export default connect(mapStateToProps, { fetchPosts })(PostIndex);