import React from 'react';

/**
 * Video List Item
 * 
 * @param {Object} video
 * @param {Function} onVideoSelect 
 */
const VideoListItem = ({ video, onVideoSelect }) => {
    
    // Val
    const
        imageUrl = video.snippet.thumbnails.default.url,
        imageTitle = video.snippet.title;

    // Return
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)} >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{imageTitle}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;