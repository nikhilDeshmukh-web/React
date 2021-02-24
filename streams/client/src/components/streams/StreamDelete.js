import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';


class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        const id = this.props.match.params.id;
        return(
            <React.Fragment>
                <button className='ui button negative' onClick={() => this.props.deleteStream(id)}>Delete</button>
                <button className='ui button'onClick={() => history.push('/')}>Cancel</button>
            </React.Fragment>
        );
    }
    
    renderContent () {
        if(!this.props.stream){
            return 'Are you sure about deleting this stream?'
        }

        return `Are you sure about deleting this stream with title:${this.props.stream.title}`
    }

    render(){
        return(
                <Modal
                    title='Delete Stream'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />       
        ); 
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{
    fetchStream, deleteStream
})(StreamDelete);