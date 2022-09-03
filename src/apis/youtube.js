import axios from 'axios';

const KEY = 'AIzaSyBwb3qBfIXdcmqU8fCdfgG2hHeLL_E6wGU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});