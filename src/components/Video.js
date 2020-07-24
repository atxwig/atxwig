import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="h-32 lg:h-64">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      width="95%"
      height="100%"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video

{/* <iframe width="956" height="538" 
src="https://www.youtube.com/embed/fFm2OWvY2TA" 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe> */}