import React, { Component } from 'react';


export default class LandingPage extends Component{

    render(){
        
            if (this.props.user.user_id == null){
            
                return(
                    <center>
                        <h3> You are not logged in! Please register if you are new user or login if you already have account.</h3>
                    </center>
                )
            }else{
                return(
                    <center>
                        <h3> Welcome to Up Next </h3>
                        <img src="https://media.bleacherreport.com/f_auto,w_630,h_420,q_auto,c_fill/br-img-images/002/161/955/Jordan_dunk_original_original_original_crop_exact_crop_north.jpeg" />
                    </center>
    
                )

            }
    }
}