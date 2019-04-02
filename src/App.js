import React, { Component } from 'react';
import './App.css';
import Travels from './components/Travels'
import Form from './components/Form'
import './components/Travels.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Travels />
         <Form />
        
        </header>
      </div>
    );
  }
}

export default App;
