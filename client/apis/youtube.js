const KEY = 'AIzaSyCATalG9sHdHobEaTlB6zxQwpbmFOCPK78';

import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  },
});

