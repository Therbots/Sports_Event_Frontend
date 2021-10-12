import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map'
import Profile from './Profile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: []
         }
    }

    componentDidMount () {
        this.profileCreated()
    }


    profileCreated = async () => {
        const access = localStorage.getItem('access')
          let response = await axios.get('http://127.0.0.1:8000/api/profiles/', { headers: {Authorization: 'Bearer ' + access}})
          this.setState({
              profile: response.data
          })
      }

    render() { 
        if (this.state.events === [] && this.state.profile === []) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <React.Fragment>
                    <h1>Hello World!</h1>
                    <Profile profile={this.state.profile}/>
                    <Map />
            </React.Fragment>
         );
        }
    }
}
 
export default Home;