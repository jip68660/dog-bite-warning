import React from 'react';
import './Marker.css';

const Marker = (props) => {    
    return (
        <div 
            className={`marker ${ props.class }`}
        >    
        </div>    
    );
};
export default Marker;