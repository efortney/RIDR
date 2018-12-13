/**
 * Map currently exists as the home page of the application, where we are rendering 
 * most of the UI. 
 */

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import { ClipLoader } from 'react-spinners';
import SearchBar from './searchbar';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const loadingStyles = {
  position: 'fixed',
  top: '50%',
  left: '40%'
};

/** 
 * Displays while the googe maps API is loading  
*/
const LoadingContainer = () => {
  return (
    <div className="text-center" style={loadingStyles}>
      <ClipLoader sizeUnit={'px'} size={125} color={'#123abc'} />
    </div>
  );
};

export class MapContainer extends Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return (
      <div>
        <SearchBar location={this.state.userLocation} />
        <Map
          google={google}
          mapTypeControl={false}
          initialCenter={userLocation}
          zoom={14}
        >
          <Marker position={userLocation} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC6UtxcZVztpcSZGOrCtAWfHSCN6PzJtL4',
  LoadingContainer: LoadingContainer
})(MapContainer);
