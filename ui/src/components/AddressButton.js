import React from 'react';
import { useHistory } from 'react-router-dom';

const AddressButton = (props) => {
    let history = useHistory();
    
    function handleDirect () {
        history.push("/address");
        console.log(history);
        props.handleSearch();
    }

    return(
        <button
            className={ props.className }
            onClick={ handleDirect }  
        >
        {/* <a href= { props.target }> */}
        { props.buttonValue }
        {/* </a> */}
        </button>
    );
}

export default AddressButton;