import React, { Component } from 'react';
// const Component = React.Component; // Syntactic sugar

/**
 * Search Bar Component
 * @class
 */
class SearchBar extends Component {
    
    // Constructor
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    // Render
    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
                value : {this.state.term}
            </div>
        );
    }

    // Change Input
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTerm(term);
    }
}

export default SearchBar;