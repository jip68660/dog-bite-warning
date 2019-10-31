import React from 'react';

const ButtonFormat = (props) => {
    return(
        <button
            className={ props.className }
            onClick={ props.handleSearch }  
        >
        <a href= { props.target }>
        { props.buttonValue }
        </a>
        </button>
    );
}

export default ButtonFormat;