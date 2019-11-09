import React from 'react';
import InputFormat from './InputFormat';
import ButtonFormat from './ButtonFormat';
import AddressButton from './AddressButton';

const Home = (props) => {
    return(
        <div className="container">
            <div className="caution"><a>CAUTION</a> DOG WILL BITE</div>
            <div className="userInput">
            <InputFormat 
                className={ "addressInput "}
                placeholder={ "Please type address" }
                value={ props.address }
                name={ "address" }
                handleChange = { props.handleChange }
            />
            <AddressButton  
                className={ "button search" }
                buttonValue={ "Search" }
            />
            </div>
        </div>
    );
}

export default Home;