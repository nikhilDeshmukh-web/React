import React from 'react';

import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'316707571213-8ppaue5ds8gc416h00t8v40cc2h96g26.apps.googleusercontent.com',
                scope: 'email'     
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });

    }

    onAuthChange = (isSignedIn) => {
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return (
                    
                   <button className='ui negative google button' onClick={this.onSignOutClick} >
                       <i className='google icon'>SignOut</i>
                   </button> 
                  
            ); 
        } else {
            return(
              
                <button className='ui green google button' onClick={this.onSignInClick} >
                    <i className='google icon'>SignIn</i>
                </button>
                
            );
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
    mapStateToProps,
    {signIn,signOut}
)(GoogleAuth);