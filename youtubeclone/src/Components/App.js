import youtube from '../apis/youtube';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoDetails from './VideoDetail';


class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
           params: {
               q: term
           }     
        });
        //console.log(response.data.items);
        this.setState({ videos : response.data.items});
    };

    onVideoSelection = (video) => {
        //console.log('Called from App component !', video);
        this.setState({selectedVideo: video });
    };

    render(){
        return(
            <div className="ui container">
                 <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    Total Videos found : {this.state.videos.length}
                    <VideoList onVideoSelection={this.onVideoSelection} videos={this.state.videos}/>
             </div>
        );
    }
}

export default App;