import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
import MessageForm from './components/MessageForm.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
      	<Landing />
      	<MessageForm />
      </div>
    )
  }
}

export default App;
