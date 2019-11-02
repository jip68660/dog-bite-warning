import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import Map from './components/Map';
import './App.css';

const history = createBrowserHistory();

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
    // this.setState({
    //   address: ""
    // });
    console.log(this.state.address);
  }

  render() {
    return (
      <Router history={ history }>
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
