import React from 'react';

function RecomendedEvents (props) {

    const skillLvl = props.skill.map((item => {
        return item.level
    }))

    const recS = props.events.map((item => {
        return item.sport.name;
    }));

    const recSL = props.events.map((item => {
        return item.skill_level;
    }));

    const fav = props.favSport.map((item => {
        return item.sport.name
    }))

    if (fav[0] !== recS[0] && skillLvl[0] !== recSL[0]) {
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