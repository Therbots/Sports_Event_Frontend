import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Registration from './components/Registration';

export default class App extends Component {

    state= {
        user:{}
  
     };
    
  
     
    componentDidMount() {
      
      
        const jwt = localStorage.getItem('token');
        try{
        const user = jwt_decode(jwt);  
            this.setState({
              user: user
              
            });                     
  
                }catch {
           
         }
        }
        
  
    render() { 
      if (this.state.user === {}) {
        return (
          <React.Fragment>
            <h1>Loading...</h1>
          </React.Fragment>
        )
        } else {
          return (
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/"  component={()=><LandingPage user = {this.state.user}/>}/>
                <Route exact path="/registration"  component={Registration}/>
                <Route exact path="/login"  component={Login}/>
              </Switch>
            </div>
          </BrowserRouter>
        
          );
      }
    }
  }
