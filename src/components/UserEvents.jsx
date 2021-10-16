import React from 'react';

function UserEvents (props) {
    return (
        <center>
        <table>
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
                        </tr>
                        ))}
                </tbody>
        </table>
        </center>
    )
}

export default UserEvents;