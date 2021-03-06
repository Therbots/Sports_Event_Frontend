import axios from 'axios';
import React, { Component } from 'react';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            dateTime: '',
            location: '',
            numberOfPlayers: 0,
            skillLevel: '',
            competitivenessLevel: '',
            sportId: 0
         }
    }

    handleSubmit = (event) => {
        console.log("E", this.state)
        
        if (Date.now() >= this.props.user.exp * 1000) {
            this.props.refreshToken()
        } else {
        const access = localStorage.getItem('access');
        axios.post('http://127.0.0.1:8000/api/sports_events/', {sport: this.state.sportId, name: this.state.name, date_time: this.state.dateTime, location: this.state.location, number_of_players: this.state.numberOfPlayers, skill_level: this.state.skillLevel, competitiveness_level: this.state.competitivenessLevel}, { headers: {Authorization: 'Bearer ' + access}})
        }
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
            <div className="box">
                <h1>Create Your Event</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Event Name: </label>
                    <input type="text" name="name"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>Date and Time:</label>
                    <input type="datetime-local" name="dateTime"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>Location:</label>
                    <input type="text" placeholder="Enter street, city, state address" name="location"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>Number of Players:</label>
                    <input type="number" name="numberOfPlayers"onChange={this.handleChangeInt} />
                    <br>
                    </br>
                    <div>
                        <label>Sport to Play:</label>
                    <select id="dropdown" name="sportId" className="btn btn-secondary dropdown-toggel" onChange={this.handleChangeInt}>
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
                        <label>Desired Skill Level:</label>
                    <select id="dropdown" name="skillLevel" className="btn btn-secondary dropdown-toggel" onChange={this.handleChange}>
                        <option>Choose a Skill Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                    </select>
                        <label>Desired Competitiveness Level:</label>
                    <select id="dropdown" name="competitivenessLevel" className="btn btn-secondary dropdown-toggel" onChange={this.handleChange}>
                        <option>Choose Competitiveness Level</option>
                        <option value="for fun">For Fun</option>
                        <option value="friendly">Friendly</option>
                        <option value="tough">Tough</option>
                    </select>
                    </div>        
                    <button type="submit" className="btn btn-secondary">Create Event</button>
                </form>
            </div>
         );
    }
}
 
export default CreateEvent;