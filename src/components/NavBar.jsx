import React, { Component } from 'react';
import { Link } from 'react-router-dom';



  export default class NavBar extends Component {

    handleLogout=()=>{
        localStorage.clear();
        window.location = "/";

    }
    render() {      
        if (this.props.user.user_id == null) {
            return (

              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul> 
                <Link to='/registration' className="navbar-brand">  <li>  Register </li>   </Link> 
                </ul>
                <ul>
                <Link to='/login' className="navbar-brand" >  <li>  Login </li> </Link> 
                </ul> 
              </nav>              
            )

        } else {
        
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                    <ul>
                    <Link to='/home' className="navbar-brand" >  <li> Home </li> </Link> 
                    </ul>
                    <ul>
                    <Link to='/createprofile' className="navbar-brand" > <li> Create Profile </li> </Link>
                    </ul>
                    <ul>                
                    <Link to='/createevent' className="navbar-brand" >  <li> Create Event </li> </Link>
                    </ul>
                    <ul>
                    <Link to='/searchevents' className="navbar-brand" >  <li> Search Events </li> </Link>
                    </ul>
                    <ul>
                    <Link to='/' className="navbar-brand" onClick={()=> this.handleLogout()}>  <li> Logout </li> </Link>
                    </ul>
                </nav>
            );
        }
    }
}