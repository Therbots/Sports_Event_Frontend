import axios from 'axios';
import React, { Component } from 'react';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dateTime: '',
            location: '',
            numberOfPLayers: 0,
            skillLevel: '',
            competitivenessLevel: '',
            sportId: 0
         }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const access = localStorage.getItem('access');
        axios.post('http://127.0.0.1:8000/api/sports_events/', {sport: this.state.sportId, date_time: this.state.dateTime, location: this.state.location, number_of_players: this.state.numberOfPLayers, skill_level: this.state.skillLevel, competitiveness_level: this.state.competitivenessLevel}, { headers: {Authorization: 'Bearer ' + access}})
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleChangeInt = (event) => {
        event.preventDefault();
        this.setState ({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Create Your Profile</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Date and Time</label>
                    <input type="datetime-local" name="dateTime"onChange={this.handleChange} />
                    <label>Location</label>
                    <input type="text" name="location"onChange={this.handleChange} />
                    <label>Number of Players</label>
                    <input type="number" name="numberOfPlayers"onChange={this.handleChange} />
                    <div>
                        <label>Sport to Play</label>
                    <select id="dropdown" name="sportId" onChange={this.handleChangeInt}>
                        <option>Choose a sport</option>
                        <option value="1">Basketball</option>
                        <option value="2">Football</option>
                        <option value="3">Baseball</option>
                        <option value="4">Soccer</option>
                        <option value="5">Kickball</option>
                        <option value="6">Wiffleball</option>
                        <option value="7">Ultimate Disc</option>
                        <option value="8">Disc Golf</option>
                        <option value="9">Tennis</option>
                    </select>
                        <label>Desired Skill Level</label>
                    <select id="dropdown" name="skillLevel" onChange={this.handleChange}>
                        <option>Choose a Skill Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                    </select>
                        <label>Desired Competitiveness Level</label>
                    <select id="dropdown" name="competitivenessLevel" onChange={this.handleChange}>
                        <option>Choose Competitiveness Level</option>
                        <option value="fun">For Fun</option>
                        <option value="friendly">Friendly</option>
                        <option value="tough">Tough</option>
                    </select>
                    </div>        
                    <button type="submit">Create Event</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default CreateEvent;