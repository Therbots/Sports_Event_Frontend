import React from 'react';

function RecomendedEvents (props) {

    const recE = props.events.map((item => {
        return item.sport.name;
    }));
    console.log("PE", recE[0])
    const fav =props.favSport[0].sport.name;

    if (fav !== recE[0]) {
        return (
            <h2>No Recomended Events</h2>
        )
    } else {
    return (
        <div>
        <table>
            <thead>
                <h2>Recomended Events</h2>
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
                        </tr>
                        ))}
                </tbody>
        </table>
        </div>
    )
    }
}

export default RecomendedEvents;