import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            center: { lat: 31.89, lng: -97.04}, //"user" will be center
            zoom: 14,
            markers: [{class:"user", lat:31.89, lng:-97.04}, {class:"dog", lat:31.874, lng:-97.040}] //{"class", "lat", "lng", "level"}
        }
        this.displayMarkers = this.displayMarkers.bind(this);
    }
    displayMarkers = () => {
        const displayDogs = this.state.markers.map((marker, index) => {
            return(
                <Marker 
                    class={marker.class}
                    lat={marker.lat}
                    lng={marker.lng} 
                />
            )
        });
        return displayDogs;
    } 
    render() {
        return (
            <div style={{ margin: 'auto', height: '90vh', width: '90vw' }}>                
                {/* { this.changeCenter({lat:31.89, lng:-97.04}) } */}
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAyL5y5X8IPLWPVil6qwDah5PAK9C80d-Q" }}
                    defaultCenter={ this.state.center }
                    defaultZoom={ this.state.zoom }
                >
                { this.displayMarkers() }
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map
