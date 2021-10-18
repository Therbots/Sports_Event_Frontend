import React, { Component } from 'react';

class CreateMessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            body: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() { 
        return ( 
            <form>
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange}></input>
                <label>Body</label>
                <input type="text" name="title" onChange={this.handleChange}></input>
            </form>
         );
    }
}
 
export default CreateMessageBoard;