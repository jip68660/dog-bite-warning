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
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    });
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
                  />
                );
              }
            } 
          />
          <Route 
            path="/address"
            render={() => {
                return(
                  <Map 
                    address={ this.state.address }
                  />
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
