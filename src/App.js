import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/ListComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Hooks Example</p>
        </header>
              
        <section>
          <h1>ListComponent</h1>
          <p>(useContext/useReducer example)</p>
          <List />
        </section>
      
      </div>
    );
  }
}

export default App;
