import React from 'react';

const ButtonFormat = (props) => {
    return(
        <button
            className={ props.className }
            // onClick={ props.handleClick }  
            onClick={ () => {} }  
        >
        { props.buttonValue }
        </button>
    );
}

export default ButtonFormat;