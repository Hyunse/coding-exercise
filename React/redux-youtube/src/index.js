import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';


// Youtube API Key
const API_KEY = 'Enter your API_KEY';

// Step 1. Create new Components
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('Korea');
    }

    // Search Videos from Youtube
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos: videos });
        });
    }

    // Render
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTerm={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

// Step 2. Take this component to HTML
ReactDom.render(<App/>, document.querySelector('.container'));