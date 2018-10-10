import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embad-responsive-16by9" style={{ height: '400px'}}>
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>

      <div className="details">
        <div className="">{video.snippet.title}</div>
        <div className="">{video.snippet.description}</div>
      </div>
    </div>
  );

}

export default VideoDetail;
