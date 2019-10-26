import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Map from './components/Map';
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
      <Router>
        <div>
          <Route 
            path="/"
            exact
            render={() => {
                return(
                  <Home
                    address={ this.state.address }
                    handleChange={ this.handleChange }
                    handleSearch={ this.handleSearch }
                  />
                );
              }
            } 
          />
          <Route 
            path="/address"
            render={() => {
                return(
                  <Map />
                );
              }
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
