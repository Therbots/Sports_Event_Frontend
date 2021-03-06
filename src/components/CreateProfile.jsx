import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            street: '',
            city: '',
            state: '',
            zipcode: '',
            sportId: 0,
            skillLevel: '',
            image: null,
            user: {}
         }
    }

    componentDidMount () {
        const jwt = localStorage.getItem('access');
        try{
        const user = jwt_decode(jwt);  
            this.setState({
              user: user  
            });                     
                }catch {          
         }
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {  
        event.preventDefault()
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('image', this.state.image[0]);
        formData.append('street', this.state.street);
        formData.append('city', this.state.city);
        formData.append('state', this.state.state);
        formData.append('zipcode', this.state.zipcode);
        if (Date.now() >= this.props.user.exp * 1000) {
            this.props.refreshToken()
        } else {   
            const access = localStorage.getItem('access');    
            axios.post('http://127.0.0.1:8000/api/profiles/', formData, { headers: {'Content-Type': 'multipart/form-data', Authorization: 'Bearer ' + access}});
            axios.post('http://127.0.0.1:8000/api/favorite_sports/', {sport: this.state.sportId}, { headers: {Authorization: 'Bearer ' + access}});
            axios.post('http://127.0.0.1:8000/api/skill_levels/', {level: this.state.skillLevel, sport: this.state.sportId}, { headers: {Authorization: 'Bearer ' + access}});

            window.location = "/";
        }
    };

    handleChangeInt = (event) => {
        this.setState ({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    handleChangeImage = (event) => {
        this.setState ({
            [event.target.name]: event.target.files
        })
        console.log("image", event.target.files)
    }


    render() { 
        console.log("profile", this.state)
        console.log("props", this.props.user)
        return ( 
            <div className="box">
                <h1>Create Your Profile</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Profile Name:</label>
                    <input type="text" name="name"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>Profile Image:</label>
                    <input type="file"  accept="image/*" className="form-control" name="image"onChange={this.handleChangeImage} />
                    <br>
                    </br>
                    <label>Street you live on:</label>
                    <input type="text" name="street"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>City:</label>
                    <input type="text" name="city"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>State:</label>
                    <input type="text" name="state"onChange={this.handleChange} />
                    <br>
                    </br>
                    <label>Zipcode:</label>
                    <input type="number" name="zipcode"onChange={this.handleChange} />
                    <br>
                    </br>
                    <div>
                        <label>Favorite Sport:</label>
                    <select id="number" name="sportId" className="btn btn-secondary dropdown-toggel" onChange={this.handleChangeInt}>
                        <option>Choose a sport</option>
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
                        <label>Skill Level:</label>
                    <select id="dropdown" name="skillLevel" className="btn btn-secondary dropdown-toggel" onChange={this.handleChange}>
                        <option>Choose a Skill Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                    </select>
                    </div>        
                    <button type="submit" className="btn btn-secondary">Create Profile</button>
                </form>
            </div>
         );
    }
}
 
export default CreateProfile;