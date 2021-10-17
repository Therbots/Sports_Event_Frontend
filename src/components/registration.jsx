import React, { Component } from 'react';
import axios from 'axios';

class RegisterUser extends Component {
    state = {
        
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',        
        
        
    }

    registerUser =async () =>{

      
       await axios.post('http://127.0.0.1:8000/api/auth/register/', {first_name: this.state.firstName, last_name: this.state.lastName, username: this.state.userName, email: this.state.email, password: this.state.password})
        


            window.location = "/";
     

          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        this.registerUser();
    };
   
        

    render(){
        return(
            <React.Fragment>
            <center>
            <form className="container" onSubmit={(event) => this.handleSubmit(event)}>
                <label>First Name</label>
                <input type="text" name="firstName"onChange={this.handleChange} value={this.state.firstName}/>
                <label>Last Name</label>
                <input type="text" name="lastName"onChange={this.handleChange} value={this.state.lastName}/>
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.userName}/>
                <label>Email</label>
                <input type="text" name="email"onChange={this.handleChange} value={this.state.email}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.password}/>
                <button type="submit">Register</button>
            </form>
            </center>
            </React.Fragment>
        );
    }
}
export default RegisterUser;