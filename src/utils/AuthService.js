import localStorage from 'local-storage'
import decode from 'jwt-decode';
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

class AuthService{
    constructor(props){

        this.token = null;
        this.sessionId = null;
        this.isLoggedIn = false;
        this.decodedToken = {};
        this.instance = null;
        this.baseURL = process.env.REACT_APP_SERVER_URL;

        this.init();
    }

    //Initialising functions
    init = () => {
        this.extractToken();
        this.extractSessionId();
        this.verifyToken();
        this.createInstance();
    }

    //Extract tokens from localStorage
    extractToken = () => {
        this.token =  localStorage.get('token');
    }

    //Extract session_id from localStorage
    extractSessionId = () => {
        this.sessionId = localStorage.get('session_id');
    }

    //This just decodes the token
    verifyToken = () => {
        //Only decode takes place here
        const token = this.token;
        let decodedToken = {};
        try{
            decodedToken = decode(token);
            this.isLoggedIn = true;
            this.decodedToken = decodedToken;
            return ;
        }
        catch(err){
            this.isLoggedIn = false;
            return;
        }
    }

    //Create a local axios instance
    createInstance = () => {
        const baseUrl = this.baseURL;

        this.instance = axios.create({
            baseURL : baseUrl,
            timeout : 2000
        });

        if(this.isLoggedIn){
            this.instance.defaults.headers.common['Authorization'] = this.token;
        }
    }

    //Api Interactions
    registerUser = () => {

    }

    loginUser = (username, pwd) => {
        return this.instance.post('/common/login', {
            username : username,
            password : pwd
        })
    }



}

export default AuthService;