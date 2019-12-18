import * as _ from 'lodash';
import localStorage from 'local-storage'
import decode from 'jwt-decode';

class AuthService{
    constructor(props){
        super(props);
        this.token = this.extractToken();
        this.sessionId = this.extractSessionId();

    }

    //Extract tokens from localStorage
    extractToken = () => {
        return localStorage.get('token');
    }

    //Extract session_id from localStorage
    extractSessionId = () => {
        return localStorage.get('session_id');
    }

    verifyToken = () => {
        //Only decode takes place here
        const token = localStorage.get('token');
        const decodedToken = decode(token);
    }

    //Api Interactions
    registerUser = () => {

    }

    loginUser = () => {

    }



}