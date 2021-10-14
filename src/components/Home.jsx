import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map'
import Profile from './Profile';
import EventTable from './EventTable';
import jwt_decode from "jwt-decode";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: [],
            user: {},
            events: [],
         }
    }

    componentDidMount () {
        this.profileCreated()
        const jwt = localStorage.getItem('access');
        try{
        const user = jwt_decode(jwt);  
            this.setState({
              user: user  
            });                     
                }catch {          
         }
        }

        getEvents = async () => {
            let response = await axios.get('http://127.0.0.1:8000/api/sports_events/all/');
            this.setState ({
               events: response.data
            })
       }   
        
    profileCreated = async () => {
        const access = localStorage.getItem('access')
        if (Date.now() >= this.state.user.exp * 1000) {
            this.props.refreshToken()
        } else {
          let response = await axios.get('http://127.0.0.1:8000/api/profiles/', { headers: {Authorization: 'Bearer ' + access}})
          this.setState({
              profile: response.data
          })
        }
      }

    render() { 
        console.log("profile",this.state.profile)
        if (this.state.profile.length === 0 && this.state.events.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <React.Fragment>
                    <h1>Hello World!</h1>
                    <Profile profile={this.state.profile}/>
                    <Map profile={this.state.profile}/>
                    <EventTable user={this.state.user} eventDetails={this.handleEventDetails}/>
            </React.Fragment>
         );
        }
    }
}
 
export default Home;