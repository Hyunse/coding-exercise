import React from 'react';
import VideoListItem from './video_list_item.js';

/**
 * Video List
 * 
 * @param {Object} props - onVideoSelect & videos
 */
const VideoList = (props) => {
    
    // Video Items Array
    const videoItmes = props.videos.map((video) => {
        return (
            <VideoListItem 
                video={video}
                key={video.etag}
                onVideoSelect={props.onVideoSelect} />
        )
    });

    // Return
    return (
        <ul className="col-md-4 list-group">
            {videoItmes}
        </ul>
    );
};

export default VideoList;
