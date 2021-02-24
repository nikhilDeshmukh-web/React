import axios from 'axios';

const KEY= 'AIzaSyDKZLMVTzUb0zcn_OfSpXVsZIF0bi4ZGmA' ;


//import React from 'react';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

