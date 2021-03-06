import React from 'react';
import CreateMessageBoard from './CreateMessageBoard';
import './UserEvents.css'
import axios from 'axios';


function UserEvents (props) {

    const handleClick = async (event) => {
        console.log("clicked")
        console.log("event", event)  
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/attending_athletes/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
        
    }

    return (
        <div>
        <table>
            <thead>
                <h2>Your Events</h2>
            </thead>
            <tbody>
                    {props.events.map((item =>
                        <tr key={item.id} className="box">
                            <h3>Event Name</h3>
                            <td>{item.name}</td>
                            <h3>Date</h3>
                            <td>{item.date_time}</td>
                            <h3>Location</h3>
                            <td>{item.location}</td>
                            <h3>Number of Players</h3>
                            <td>{item.number_of_players}</td>
                            <h3>Skill Level</h3>
                            <td>{item.skill_level}</td>
                            <h3>Competitiveness Level</h3>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" className="btn btn-secondary">Create Message Board</button>
                            <button type="button" className="btn btn-secondary">Delete Event</button>
                        </tr>
                        ))}
                </tbody>
        </table>
        </div>
    )
}

export default UserEvents;