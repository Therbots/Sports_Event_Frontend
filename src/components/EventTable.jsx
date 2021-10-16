import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class EventTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: [],
            searchField: ''
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

    handleClick = async (event) => {
        console.log("clicked")
        console.log("event", event)
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/attending_athletes/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
    }


    render() { 
        if (this.state.events.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        return ( 
            <div>
                <SearchBar />
            <center>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date and Time</th>
                        <th>Location</th>
                        <th>Number of Desired Players</th>
                        <th>Desired Skill Level</th>
                        <th>Competitiveness Level</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.events.map((item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date_time}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" className="btn btn-primary" onClick={() => this.handleClick(item.id)}>Join</button>
                        </tr>
                        ))}
                </tbody>
            </table>
            </center>
            </div>

         );
        }
    }
}
 
export default EventTable;