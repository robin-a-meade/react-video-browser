import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useYoutubeSearch = () => {
  const [term, setTerm] = useState('');
  // stateId codes
  // 0 - Waiting for user to perform their first search
  // 1 - Successful search
  // 2 - Search failed due to an error

  const [state, setState] = useState({ stateId: 0, videos: [] });

  useEffect(() => {
    if (term) {
      youtube.get('/search', {
        params: {
          q: term
        }
      }).then(response => {
        setState({ stateId: 1, videos: response.data.items });
      }).catch(error => {
        console.log('An error occurred');
        console.log(error);
        setState({ stateId: 2, videos: [] });
      })
    } else {
      if (state.stateId != 0) {
        setState({ stateId: 0, videos: [] });
      }
    }
  }, [term]);

  return [term, setTerm, state];
};

export default useYoutubeSearch;
