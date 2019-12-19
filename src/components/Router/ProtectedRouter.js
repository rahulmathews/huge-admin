import React , {Component} from 'react';

import { Route, Redirect } from 'react-router-dom';

import AuthService from '../../utils/AuthService';

class ProtectedRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated : false
        }

        this.Auth = new AuthService();
    }

    componentDidMount = () => {
        
    }

    render(){
        return (
            <Route render = {() => (
                this.Auth.isLoggedIn ? 
                {...this.props} : 
                <Redirect to="/" />
            )} />
        )
    }
}

export default ProtectedRouter