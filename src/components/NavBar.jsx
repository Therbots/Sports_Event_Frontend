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

              <nav>
                <ul > 
                <h3> Welcome to Pick-up Game! </h3> 
                <Link to='/registration'>  <li>  Register </li>   </Link> 

                <Link to='/login' >  <li>  Login </li> </Link> 
                </ul> 
              </nav>              
            )

        } else {
        
            return (
                <nav>
                    <ul>
                    <Link to='/createprofile' > <li> Create/Update Profile </li> </Link>
                    <Link to='/home' >  <li> Home </li> </Link> 
                    <Link to='/createevent' >  <li> Create Event </li> </Link>
                    <Link to='/searchevents' >  <li> Search Events </li> </Link>
                    <Link to='/' onClick={()=> this.handleLogout()}>  <li> Logout </li> </Link>
                    </ul>
                </nav>
            );
        }
    }
}