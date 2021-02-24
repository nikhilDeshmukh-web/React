import React from 'react';
import VideoItem from "./VideoItem";



const VideoList = ({videos, onVideoSelection}) => {
    const renderedVideos = videos.map( (video) => {
        return <VideoItem key={video.id.videoId} onVideoSelection={onVideoSelection} video={video} />
    });
    return <div className= "ui relaxed divided list"> {renderedVideos} </div>
}

export default VideoList;