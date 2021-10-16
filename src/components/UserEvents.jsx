import React from 'react';

function UserEvents () {
    return (
        <table>
            <tbody>
                    {this.state.events.map((item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.date_time}</td>
                            <td>{item.sport}</td>
                            <td>{item.location}</td>
                            <td>{item.number_of_players}</td>
                            <td>{item.skill_level}</td>
                            <td>{item.competitiveness_level}</td>
                            <button type="button" onClick={() => handleClick(item.id)}>Join</button>
                        </tr>
                        ))}
                </tbody>
        </table>
    )
}

export default UserEvents;