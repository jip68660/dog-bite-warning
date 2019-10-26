import React from 'react';
import Map from './components/Map'
import InputFormat from './components/formats/InputFormat'
import ButtonFormat from './components/formats/ButtonFormat'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      address: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    });
  }
  handleSearch = (event) => {
    this.setState({
      address: ""
    });
  }

  render() {
    return (
      <div className="App">
        <div className="caution"><a>CAUTION</a> DOG WILL BITE</div>
        <div className="userInput">
          <InputFormat 
            className={ "addressInput "}
            placeholder={ "Please type address" }
            value={ this.state.address }
            name={ "address" }
            handleChange = { this.handleChange }
          />
          <ButtonFormat 
            className={ "button search" }
            buttonValue={ "Search" }            
            handleSearch={ this.handleSearch }
          />
        </div>
        {/* <Map /> */}
      </div>
    );
  }
}

export default App;
