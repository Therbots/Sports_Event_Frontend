import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import jwt_decode from "jwt-decode";
import NavBar from './components/NavBar';
import Home from './components/Home';

export default class App extends Component {

    state= {
        user:{}
  
     };
    
  
     
    componentDidMount() {
      
      
        const jwt = localStorage.getItem('access');
        try{
        const user = jwt_decode(jwt);  
            this.setState({
              user: user
              
            });                     
  
                }catch {
           
         }
        }
        
  
    render() { 
        console.log("token", this.state.user)
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
              <NavBar user = {this.state.user}/>
              <Switch>
                <Route exact path="/"  render={props => <LandingPage {...props} user={this.state.user}/>}/>
                <Route exact path="/registration"  component={Registration}/>
                <Route exact path="/login"  component={Login}/>
                <Route exact path="/home"  component={Home}/>
              </Switch>
            </div>
          </BrowserRouter>
        
          );
      }
    }
  }
