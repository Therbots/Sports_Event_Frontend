import React from 'react';


function UserEvents (props) {


    return (
        <center>
        <table>
            <thead>
                <h2>Your Events</h2>
            </thead>
            <tbody>
                    {props.events.map((item =>
                        <tr key={item.id} className="container">
                            <td>{item.name}</td>
                            <td>{item.date_time}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                        </tr>
                        ))}
                </tbody>
        </table>
        </center>
    )
}

export default UserEvents;