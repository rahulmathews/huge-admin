import React , {Component} from 'react';

import { Route, Redirect } from 'react-router-dom';

import AuthService from '../../utils/AuthService';

class ProtectedRouter extends Component{
    constructor(props){
        super(props);
        this.Auth = null;
    }

    componentDidMount = () => {
        
    }

    render(){
        const {component : Component, ...rest} = this.props;

        return (
            <Route {...rest} render = {(props) => {
                this.Auth = new AuthService();
                if(this.Auth.isLoggedIn){
                    return <Component {...props}/>; 
                }
                return <Redirect to="/" />
            }} />
        )
    }
}

export default ProtectedRouter