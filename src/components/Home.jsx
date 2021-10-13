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
            user: {}
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
        if (this.state.profile === []) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <React.Fragment>
                    <h1>Hello World!</h1>
                    <Profile profile={this.state.profile}/>
                    <Map />
                    <EventTable user={this.state.user}/>
            </React.Fragment>
         );
        }
    }
}
 
export default Home;