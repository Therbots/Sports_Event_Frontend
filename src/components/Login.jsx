import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

class Login extends Component {
    state = {
        
        userName: '',
        password: '',
   
            
    }

    loginUser =async () =>{


       

       let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {username: this.state.userName, password: this.state.password })
          console.log("data", response.data)
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            this.setState({loggedIn : true});
            
            
          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault(); 
        this.loginUser();
        
    };
   
        

    render(){
        if (this.state.loggedIn){
            return <Redirect to={'/home'}  {...window.location = "/"} />
           

        }
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  render={props => <LandingPage {...props} username={this.state.username}/>}/>
                </Switch>
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
               
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.userName}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.password}/>
                
                <button type="submit">Login</button>
            </form>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}
export default Login;