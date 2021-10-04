import React from 'react';
import { AuthUserContext } from './index';
import { withFireBase } from '../Firebase/index';

const withAuth = Component => {
    class WithAuth extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                authUser: null
            };
        }
        
        componentDidMount(){
            this.listener = this.props.firebase.getOnAuthStateChanged(
                authUser => {
                  authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
                },
            );
        }

        componentWillUnmount(){
            this.listener()
        }

        render (){
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} /> 
                </AuthUserContext.Provider>
            )
        }
    }

    return withFireBase(WithAuth);
}

export default withAuth;