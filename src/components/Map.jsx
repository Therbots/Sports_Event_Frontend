import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import axios from 'axios';

const mapStyles = {
  width: '400px',
  height: '400px'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {},
    profile: [], 
  };

  getProfile = async () => {
    const access = localStorage.getItem('access')
      let response = await axios.get('http://127.0.0.1:8000/api/profiles/', { headers: {Authorization: 'Bearer ' + access}})
      this.setState({
          profile: response.data
      })
    }
  
    componentDidMount() {
      this.getProfile()
    }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log("PP", this.state.profile[0])
    if (this.state.profile.length === 0) {
      return (
        <h1>Loaidng...</h1>
      )
    } else {
      let profile = this.state.profile[0]
      console.log("P", profile.lat)
      let myLat = profile.lat;
      let myLng = profile.lng;
    return(
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={
          {
            lat: myLat,
            lng: myLng
          }
        }
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Your Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxnPufIqzt-rlQ_chGZS38eYFrCAw8HNE'
})(MapContainer);


