import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map'
import Profile from './Profile';
import UserEvents from './UserEvents';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: [],
            events: [],
            userEvents: []
         }
    }

    componentDidMount () {
        this.profileCreated()
        this.getEvents()
        this.getUserEvents()
    }

        getUserEvents = async () => {
            
            if (Date.now() >= this.props.user.exp * 1000) {
                this.props.refreshToken()
            } else {
            const access = localStorage.getItem('access')
            let response = await axios.get('http://127.0.0.1:8000/api/sports_events/', { headers: {Authorization: 'Bearer ' + access}});
            this.setState ({
               userEvents: response.data
            })
            }
        }

        getEvents = async () => {
            let response = await axios.get('http://127.0.0.1:8000/api/sports_events/all/');
            this.setState ({
               events: response.data
            })
       }   
        
    profileCreated = async () => {
        
        if (Date.now() >= this.props.user.exp * 1000) {
            this.props.refreshToken()
        } else {
          const access = localStorage.getItem('access')
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
                    <Profile profile={this.state.profile}/>
                    <Map profile={this.state.profile} events={this.state.events}/>
                    <br>
                    </br>
                    <UserEvents events={this.state.userEvents} />
            </React.Fragment>
         );
        }
    }
}
 
export default Home;