import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'


const mapStyles = {
  width: '400px',
  height: '400px',
  padding: '5px'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {},
    profile: [], 
    eventMarkers: [],



  };

  
    componentDidMount() {
      this.distance()


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

  async distance () {
    const google = window.google;
    // let profile = this.props.profile[0];
    // let myLat = profile.lat;
    // let myLng = profile.lng;
    const myLat = this.props.profile.map((item => {
      return item.lat;
    }))
    const myLng = this.props.profile.map((item => {
      return item.lng
    }))
    let service = new google.maps.DistanceMatrixService();
    console.log('Props Events', this.props.events)
    let eventMarkers = []
     this.props.events.map((singleEvent) => {
      service.getDistanceMatrix(
        {
          origins: [{lat: myLat[0], lng: myLng[0]}],
          destinations: [{lat: singleEvent.lat, lng: singleEvent.lng}],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        }, (response, status) => {

          let customObject = {
            'distanceResponse': response,
            'event': singleEvent,
          }
          eventMarkers.push(customObject)
        
        });
    })
   
      this.setState({
        eventMarkers: eventMarkers
      })
  }

  
  

  render() {
    console.log("PP",this.props.profile)
    // if (this.state.eventMarkers.length === 0) {
    //   return (
    //     <h1>Loading...</h1>

    //   )
    // } else {
      // let profile = this.props.profile[0]
      // let myLat = profile.lat;
      // let myLng = profile.lng;
      // console.log("DD", this.state.eventMarkers)

      const myLat = this.props.profile.map((item => {
        return item.lat;
      }))

      const myLng = this.props.profile.map((item => {
        return item.lng
      }))
      console.log("LL", myLat, myLng)
      
    return(
      <div>
      <center>
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={
          {
            lat: myLat[0],
            lng: myLng[0]
          }
        }
        >
          {this.state.eventMarkers.map(marker => (
            <Marker
              onClick={this.onMarkerClick}
              position={{ lat: marker.event.lat, lng: marker.event.lng }}
              key={marker.event.id}
              name={marker.event.name + "\n" + marker.event.sport.name + "\n" + marker.event.date_time + "\n" + marker.distanceResponse.rows[0].elements[0].distance.text}
              />
          ))}
        <Marker
          onClick={this.onMarkerClick}
          name={'Your Home'}
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
      </center>
      </div>
    );
    // }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDxnPufIqzt-rlQ_chGZS38eYFrCAw8HNE'
})(MapContainer);


