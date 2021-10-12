import React from 'react';

const Profile = (props) => {
    console.log("things", props)
    return (
        <table>
            {props.profile.map((item =>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                </tr>
                ))}
        </table>
    )
}

export default Profile;