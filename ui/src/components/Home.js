import React from 'react';
import InputFormat from './formats/InputFormat';
import ButtonFormat from './formats/ButtonFormat';
import AddressButton from './formats/AddressButton';

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
            {/* <ButtonFormat 
                className={ "button search" }
                buttonValue={ "Search" }            
                handleSearch={ props.handleSearch }
                // target={ "/address" }
            /> */}
            <AddressButton  
                className={ "button search" }
                buttonValue={ "Search" }
                handleSearch={ props.handleSearch }
            />
            </div>
        </div>
    );
}

export default Home;