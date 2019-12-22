import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import routes from './routes';
import ProtectedRouter from './ProtectedRouter';


class RouterComponent extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    componentDidMount = () => {

    }

    render(){
        return (
            routes.map((route, idx) => {
                if(route.auth){
                    return <ProtectedRouter key={idx} {...route}/>
                }
                else{
                    return <Route key={idx} {...route}/>
                }
            })
        )
    }
}

export default RouterComponent