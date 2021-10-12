import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: []
         }
    }

    componentDidMount () {
        this.getEvents()
    }

    getEvents = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/sports_events/all/');
        this.setState ({
            events: response.data
        })
    }

    render() { 
        if (this.state.events === []) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <React.Fragment>
                    <h1>Hello World!</h1>
                    <Map />
            </React.Fragment>
         );
        }
    }
}
 
export default Home;