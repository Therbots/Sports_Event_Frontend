import React from 'react';
import axios from 'axios';

function EventTable (props) {

    const handleClick = async (event) => {
        console.log("clicked")
        console.log("event", event)  
        if (Date.now() >= props.user.exp * 1000) {
                props.refreshToken()
        } else {
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/attending_athletes/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
        }
    }

    

    return (
         <div>   
            <center>
            <table className="table table-striped table-bordered table-hover table-dark">
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
                    {props.events.map((item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date_time}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" className="btn btn-dark" onClick={() => handleClick(item.id)}>Join</button>
                        </tr>
                        ))}
                </tbody>
            </table>
            </center>
            </div>
    );
}

export default EventTable;


