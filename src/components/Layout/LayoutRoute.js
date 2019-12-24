import React , {Component} from 'react';
import { Route , Redirect} from 'react-router-dom';

import AuthService from '../../utils/AuthService';

class LayoutRoute extends Component{
  constructor(props){
    super(props);
    this.Auth = null;
    const { component: Component, layout: Layout, ...rest } = props;
    this.Layout = Layout;
    this.Component = Component;
    this.rest = rest;
  }

  componentDidMount = () => {

  }

  render(){
    return (
      <Route
        {...this.rest}
        render={props => {
          this.Auth = new AuthService();
          if(this.Auth.isLoggedIn){
            return <Redirect to="/dashboard" />; 
          }

          return (
              <this.Layout>
                <this.Component {...props} />
              </this.Layout>
          )
        }}
      />
    )
  }
}

export default LayoutRoute;
