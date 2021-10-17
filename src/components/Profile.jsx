import React from 'react';

const Profile = (props) => {
    console.log("things", props)
    return (
        <table>
            {props.profile.map((item =>
                <tr key={item.id}>
                    <td><img src={`http://127.0.0.1:8000${item.image}`} alt="" border="3" height="100" width="100"></img></td>
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