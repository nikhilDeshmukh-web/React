import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId){
            return (
                <div className='right floated content'>
                    <Link to={`/stream/edit/${stream.id}`}className='ui button primary'>Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`}className='ui button negative'>Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.stream.map( stream => {
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                    </div>
                    <div className='description'>
                        {stream.description}
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            );
        }
        );
    }

    renderCreate() {
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                   <Link to="/stream/new" className="ui button primary">
                        Create Stream
                    </Link> 
                </div>
            );
        }
    }
    
    render(){
        //console.log(this.props.stream);
        return(
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                   {this.renderCreate()}
            </div>
                
            );
    }
}


const mapStateToProps = (state) => {
    return { 
        stream: Object.values(state.stream),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);