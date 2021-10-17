import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import jwt_decode from "jwt-decode";
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
import axios from 'axios';
import CreateEvent from './components/CreateEvent';
import Profile from './components/Profile';
import EventTable from './components/EventTable';
import MessageBoard from './components/MessageBoard';
import UserEvents from './components/UserEvents';
import SearchEvents from './components/SearchEvents';

export default class App extends Component {

    state= {
        user:{},
  
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

        refreshToken() {
            const refresh = localStorage.getItem('refresh')
                let response = axios.post('http://127.0.0.1:8000/api/auth/login/refresh/', {refresh: refresh})
                localStorage.setItem('access', response.data.access)
                console.log("refresh", response.data)
        }

 

        
  
    render() { 
        console.log("token", this.state.user)
      if (this.state.user === {} && this.state.profile === []) {
        return (
          <React.Fragment>
            <h1>Loading...</h1>
          </React.Fragment>
        )
        } else {
          return (
          <BrowserRouter>
            <div>
              <NavBar user = {this.state.user} profile={this.state.profile}/>
              <Switch>
                <Route exact path="/"  render={props => <LandingPage {...props} user={this.state.user}/>}/>
                <Route exact path="/registration"  component={Registration}/>
                <Route exact path="/login"  render={props => <Login {...props} profile={this.state.profile}/>}/>
                <Route exact path="/home"  render={props => <Home {...props} user={this.state.user} refreshToken={this.refreshToken}/>}/>
                <Route exact path="/createprofile"  render={props => <CreateProfile {...props} user={this.state.user} refreshToken={this.refreshToken}/>}/>
                <Route exact path="/createevent"  render={props => <CreateEvent {...props} user={this.state.user} refreshToken={this.refreshToken}/>}/>
                <Route exact path="/map"  component={Map}/>
                <Route exact path="/profile"  component={Profile}/>
                <Route exact path="/eventtable"  render={props => <EventTable {...props} user={this.state.user} refreshToken={this.refreshToken}/>}/>
                <Route exact path="/messageboard"  component={MessageBoard}/>
                <Route exact path="/userevents"  component={UserEvents}/>
                <Route exact path="/searchevents"  component={SearchEvents}/>
              </Switch>
            </div>
          </BrowserRouter>
        
          );
      }
    }
  }
