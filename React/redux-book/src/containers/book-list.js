import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindACtionCreators, bindActionCreators } from 'redux';

class BookList extends Component {

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
};

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);