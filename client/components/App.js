import React, { useState, useEffect } from 'react';
import useYoutubeSearch from '../hooks/useYoutubeSearch';
import SearchBar from './SearchBar';
import SearchStatus from './SearchStatus';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

/*
.data.items[0]: {
  id: {
   kind: "youtube#video",
   videoId: "_iQ11PRAQv8",
  },
  kind: "youtube#searchResult",
  snippet: {
    channelId: "...",
    channelTitle: "...",
    description: "...",
    liveBroadcastContent: "Live",
    publishTime: "2022-09-12T23:33:22Z",
    publishedAt: "2022-09-12T23:33:22Z",
    thumbnails: {
      default: {height: 90, url: "", width: 120},
      high: {height: 360, url: "", width: 480},
      medium: {height: 180, url: "", width: 320},
    },
    title:""
  }
}
*/


const App = () => {

  const [term, setTerm, state] = useYoutubeSearch();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    if (state.stateId == 1) {
      setSelectedVideo(state.videos[0]);
    } else {
      setSelectedVideo(null);
    }
  }, [state]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={setTerm} />
      <SearchStatus searchState={state} searchTerm={term} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={state.videos}
              onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;