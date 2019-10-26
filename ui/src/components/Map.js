import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        center: {
            lat: 32.89,
            lng: -97.04
        },
        zoom: 11
    };
 
    render() {
        return (
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAyL5y5X8IPLWPVil6qwDah5PAK9C80d-Q" }}
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                >
                    <AnyReactComponent
                        lat={ 32.897480 }
                        lng={ -97.040443 }
                        text="User"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map
