import React from 'react';
import VideoItem from './VideoItem';

// <li key={video.id.videoId}>{video.snippet.title}</li>
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(
    video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  );
  // <div class="ui relaxed divided list">
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}
export default VideoList;