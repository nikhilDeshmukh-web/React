import React from 'react';

const VideoDetails = ({ video }) => {
    if(!video){
        return <div>title </div>
    }

    const videoid = `https://www.youtube.com/embed/${video.id.videoId}` ;
    return (
            <div>
                <div className="ui segment">
                    <iframe title="video player" src={videoid}/>
                <h4 className="ui header">{`title: ${video.snippet.title}`}</h4>
                <p>{video.snippet.description}</p>
                </div>
            </div>

    );
};

export default VideoDetails;