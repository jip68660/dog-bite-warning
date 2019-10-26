import React from 'react';

const ButtonFormat = (props) => {
    return(
        <button
            className={ props.className }
            onClick={ props.handleSearch }  
        >
        { props.buttonValue }
        </button>
    );
}

export default ButtonFormat;