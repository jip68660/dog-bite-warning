import React from 'react';
import InputFormat from './components/formats/InputFormat'
import ButtonFormat from './components/formats/ButtonFormat'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      address: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          DOG-WARNING
        </div>
        <div>
          <InputFormat 
            className={ "addressInput "}
            placeholder={ "Please type Address" }
            value={ this.state.address }
            name={ "address" }
            handleChange = { this.handleChange }
          />
          <ButtonFormat 
            className={ "button search" }
            buttonValue={ "Search" }
            
            // handleClick={ }
          />
        </div>
      </div>
    );
  }
}

export default App;
