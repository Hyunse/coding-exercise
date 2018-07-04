import React from 'react';

/**
 * Video Detail Component
 * 
 * @param {Object} video - Selected Video from State
 */
const VideoDetail = ({video}) => {
    
    // Validation Check
    if(!video) {
        return <div>Loading...</div>
    }

    // Val
    const 
        videoId = video.id.videoId,
        url = `https://www.youtube.com/embed/${videoId}`;

    // Return JSX
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;