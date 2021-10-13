import React, { Component } from 'react';
import axios from 'axios';

class EventTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: []
         }
    }

    getEvents = async () => {
         let response = await axios.get('http://127.0.0.1:8000/api/sports_events/all/');
         this.setState ({
            events: response.data
         })
    }

    handleClick = async (event) => {
        console.log("clicked")
        console.log("event", event)
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/attending_athletes/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
    }

    componentDidMount () {
        this.getEvents()
    }

    render() { 
        if (this.state.events === []) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <table>
                <thead>
                    <th>Sports Events</th>
                </thead>
                <tbody>
                    {this.state.events.map((item =>
                        <tr key={item.id}>
                            <td>{item.date_time}</td>
                            <td>{item.sport}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" onClick={() => this.handleClick(item.id)}>Join</button>
                        </tr>
                        ))}
                </tbody>
            </table>
         );
        }
    }
}
 
export default EventTable;