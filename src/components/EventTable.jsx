import React from 'react';
import axios from 'axios';

function EventTable (props) {

    const handleClick = async (event) => {
        console.log("clicked")
        console.log("event", event)
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/attending_athletes/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
    }

    const createMessageBoard = async (event) => {
        const access = localStorage.getItem('access');
        await axios.post('http://127.0.0.1:8000/api/event_message_boards/', {sports_event: event}, { headers: {Authorization: 'Bearer ' + access}})
    }


    return (
        <table>
                <thead>
                    <th>Sports Events</th>
                </thead>
                <tbody>
                    {props.events.map((item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date_time}</td>
                            <td>{item.sport}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" onClick={() => handleClick(item.id)}>Join</button>
                            <button type="button" onClick={() => createMessageBoard(item.id)}>Create Message Board</button>
                            <button type="button">View Message Board</button>
                        </tr>
                        ))}
                </tbody>
            </table>
    );
}

export default EventTable;