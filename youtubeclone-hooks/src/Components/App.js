import youtube from '../apis/youtube';
import React,{ useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoDetails from './VideoDetail';


const App = () => {
    const [video, setVideo] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

     const onTermSubmit = async term => {
            const response = await youtube.get('/search',{
                params: {
                    q: term
                }     
            });
            //console.log(response.data.items);
            //this.setState({ videos : response.data.items});
            setVideo(response.data.items)
        };

    const onVideoSelection = (video) => {
        //console.log('Called from App component !', video);
        //this.setState({selectedVideo: video });
        setSelectedVideo(video);
    };

    return(
                    <div className="ui container">
                         <SearchBar onFormSubmit={onTermSubmit}/>
                            <VideoDetail video={selectedVideo}/>
                            Total Videos found : {video.length}
                            <VideoList onVideoSelection={onVideoSelection} videos={video}/>
                     </div>
                );

};



// class App extends React.Component {

//     state = {videos: [], selectedVideo: null};

//     onTermSubmit = async term => {
//         const response = await youtube.get('/search',{
//            params: {
//                q: term
//            }     
//         });
//         //console.log(response.data.items);
//         this.setState({ videos : response.data.items});
//     };

//     onVideoSelection = (video) => {
//         //console.log('Called from App component !', video);
//         this.setState({selectedVideo: video });
//     };

//     render(){
//         return(
//             <div className="ui container">
//                  <SearchBar onFormSubmit={this.onTermSubmit}/>
//                     <VideoDetail video={this.state.selectedVideo}/>
//                     Total Videos found : {this.state.videos.length}
//                     <VideoList onVideoSelection={this.onVideoSelection} videos={this.state.videos}/>
//              </div>
//         );
//     }
// }

export default App;