import React from "react";

export default function VideoPlayer({ videoData }) {
  return (
    <div>
        
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
      <h2>{videoData.title}</h2>
      <h3>{`${videoData.views} views`} | {`Uploaded: ${videoData.createdAt}`}</h3>
    </div>
  );
}
