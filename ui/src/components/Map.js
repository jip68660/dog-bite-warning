import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            center: null, //"user" will be center
            zoom: 15,
            markers: [] //{"class", "lat", "lng", "level"}
        }
        this.displayMarkers = this.displayMarkers.bind(this);
    }
    componentDidMount() {
        if (this.props.address !== "") {
            console.log(this.props.address);
            const fetchPromise =  fetch(`https://basket.hyunchel.dev?address=${ this.props.address }`);
            fetchPromise.then(response => {
                return response.json();
            }).then((data) => {
                const temp = this.state.markers.concat(data.nearestCoordinates); 
                this.setState({
                    center: { lat: data.targetCoordinate.lat, lng: data.targetCoordinate.long },
                    markers: temp
                });
            });
            // this.setState({
            //     center: { lat: 32.9876178, lng: -96.77303},
            //     markers:[{"lat":"32.987857","lng":"-96.772993"},{"lat":"32.987962","lng":"-96.77311"},{"lat":"32.987962","lng":"-96.77311"}]
            // })
        }
    }
    displayMarkers = () => {
        const displayDogs = this.state.markers.map((marker, index) => {
            return(
                <Marker 
                    key={ index }
                    class={ "dog" }
                    lat={ marker.lat }
                    lng={ marker.long } 
                />
            )
        });
        console.log(displayDogs);
        return displayDogs;
    } 
    render() {
        console.log("After:" + this.state.center);
        const map = this.state.center ? (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAyL5y5X8IPLWPVil6qwDah5PAK9C80d-Q" }}
                // defaultCenter={ this.state.center }
                center={ this.state.center }
                defaultZoom={ this.state.zoom }
            >
            { this.displayMarkers() }
        
            </GoogleMapReact>
        ):null;

        return (
            <div style={{ margin: 'auto', height: '90vh', width: '90vw' }}>  
            { map }
            </div>
        );
    }
}

export default Map
