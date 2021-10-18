import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import EventTable from './EventTable';

class SearchEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            events: [],
            searchField: ''
         }
    }

    componentDidMount () {
        this.getEvents()
    }

    getEvents = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/sports_events/all/');
        this.setState ({
           events: response.data
        })
   }   

    render() { 
        if (this.state.events.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        } else {
        const {events, searchField} = this.state
        const filteredEvents = events.filter((value) => {
            return value.name.toLowerCase().includes(searchField) || value.location.toLowerCase().includes(searchField) || value.skill_level.toLowerCase().includes(searchField) || value.competitiveness_level.toLowerCase().includes(searchField) || value.sport.name.toLowerCase().includes(searchField)
        })
        return ( 
            <React.Fragment>
                <SearchBar handleChange={(event) => this.setState({searchField: event.target.value})}/>
                <EventTable events={filteredEvents} />
            </React.Fragment>
         );
        }
    }
}
 
export default SearchEvents;