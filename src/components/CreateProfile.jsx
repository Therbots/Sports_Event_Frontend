import React, { Component } from 'react';
import axios from 'axios';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            street: '',
            city: '',
            state: '',
            zipcode: 0,
            sportId: 0,
            skillLevelId: 0,
            image: null
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const access = localStorage.getItem('access');
        if (Date.now() >= this.props.user.exp * 1000) {
            this.props.refreshToken()
        } else {
            axios.post('http://127.0.0.1:8000/api/profiles/', {user_id: this.props.user.user_id, name: this.state.name, image: this.state.image, street: this.state.street, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode}, { headers: {Authorization: 'Bearer' + access}})
            axios.post('http://127.0.0.1:8000/api/favorite_sports/', {user_id: this.props.user.user_id, sport_id: this.state.sportId}, { headers: {Authorization: 'Bearer' + access}})
            axios.post('http://127.0.0.1:8000/api/skill_levels/', {user_id: this.props.user.user_id, skill_level_id: this.state.skillLevelId}, { headers: {Authorization: 'Bearer' + access}})
        }
    };


    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Profile Name</label>
                    <input type="text" name="name"onChange={this.handleChange} value={this.state.name}/>
                    <label>Profile Image</label>
                    <input type="file" name="image"onChange={this.handleChange} value={this.state.name}/>
                    <label>Street you live on</label>
                    <input type="text" name="street"onChange={this.handleChange} value={this.state.street}/>
                    <label>City</label>
                    <input type="text" name="city"onChange={this.handleChange} value={this.state.city}/>
                    <label>State</label>
                    <input type="text" name="state"onChange={this.handleChange} value={this.state.state}/>
                    <label>Zipcode</label>
                    <input type="number" name="zipcode"onChange={this.handleChange} value={this.state.zipcode}/>
                    <div>
                        <label>Favorite Sport</label>
                    <select id="dropdown" name="sportId" onChange={this.handleChange}>
                        <option value="1">Basketball</option>
                        <option value="2">Football</option>
                        <option value="3">Baseball</option>
                        <option value="4">Soccer</option>
                        <option value="5">Kickball</option>
                        <option value="6">Wiffleball</option>
                        <option value="7">Ultimate Disc</option>
                        <option value="8">Disc Golf</option>
                        <option value="9">Tennis</option>
                    </select>
                        <label>Skill Level</label>
                    <select id="dropdown" name="skillLevelId" onChange={this.handleChange}>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advance</option>
                    </select>
                    </div>        
                    <button type="submit">Register</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default CreateProfile;