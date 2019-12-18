import React, {Component} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from './routes';
import ProtectedRouter from './ProtectedRouter';


class Router extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    componentDidMount = () => {

    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, idx) => {
                        if(route.auth){
                            return <ProtectedRouter key={idx} route/>
                        }
                        else{
                            return <Route key={idx} {...route}/>
                        }
                    })}
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}