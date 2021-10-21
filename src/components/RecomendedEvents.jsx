import React, { useState } from 'react';

function RecomendedEvents (props) {

    const [recSport, setRecSport] = useState([])

    const skillLvl = props.skill.map((item => {
        return item.level
    }))

    const fav = props.favSport.map((item => {
        return item.sport.name;
    }))

        const favSports = [];
        const recS = props.events.map((item => { 
            if (item.sport.name === fav[0]) {
                let customObject = {
                    'recEvents': item
                }
                favSports.push(customObject)
            }
            console.log(favSports)
        }));

    const recSL = props.events.map((item => {
        return item.skill_level;
    }));

    
    console.log("fav", favSports)
    if (favSports.length === 0) {
        return (
            <p>There're no Recomended Sports Events</p>
        )
    } else {
    return (
        <div>
        <table>
            <thead>
                <h2>Recomended Events</h2>
            </thead>
            <tbody>
                    {favSports.map((item =>
                        <tr key={item.recEvents.id} className="box">
                            <h3>Event Name</h3>
                            <td>{item.recEvents.name}</td>
                            <h3>Date</h3>
                            <td>{item.recEvents.date_time}</td>
                            <h3>Location</h3>
                            <td>{item.recEvents.location}</td>
                            <h3>Number of Players</h3>
                            <td>{item.recEvents.number_of_players}</td>
                            <h3>Skill Level</h3>
                            <td>{item.recEvents.skill_level}</td>
                            <h3>Competitiveness Level</h3>
                            <td>{item.recEvents.competitiveness_level}</td>
                        </tr>
                        ))}
                </tbody>
        </table>
        </div>
    )
    }
}

export default RecomendedEvents;