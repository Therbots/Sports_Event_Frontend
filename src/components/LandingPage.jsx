import React, { Component } from 'react';


export default class LandingPage extends Component{

    render(){
        
            if (this.props.user.user_id == null){
            
                return(
                <h3> You are not logged in! Please register if you are new user or login if you already have account.</h3>
                )
            }else{
                return(
                    <h3> Welcome to Pick-up Game </h3>
    
                )

            }
    }
}