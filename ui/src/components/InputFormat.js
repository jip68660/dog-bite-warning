import React from 'react';

const InputFormat = (props) => {
    return(
        <input
            className={ props.className }
            placeholder={ props.placeholder } 
            value={ props.value } 
            name={ props.name } 
            onChange={ props.handleChange }
        />
    );
}

export default InputFormat