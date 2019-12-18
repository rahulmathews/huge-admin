import React , {Component} from 'react';

import { Route } from 'react-router-dom';

class ProtectedRouter extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount = () => {
        
    }

    render(){
        return (
            <Route />
        )
    }
}

export default ProtectedRouter