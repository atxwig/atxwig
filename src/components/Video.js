import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.27198%' }}>
    <iframe
      style={{
        position:"absolute",
        top:"0",
        left:"0",
        width:"100%",
        height:"100%",
      }}
      width="500"
      height="294"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;