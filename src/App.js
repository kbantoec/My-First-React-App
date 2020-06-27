import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
// import MyComponent from './MyComponent';
// import ColoredBlock from './ColoredBlock.js';
import Products from './Products.js';


// equiv to `React.Component` if not having destructuring it in line 1
class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My React App</h1>
        </header>

        <div className="main-content">
          <p className="App-intro">Hi {this.props.name}!</p>
          <Clock />
          {/* <MyComponent /> */}
          {/* <ColoredBlock />*/}
          <Products />
       </div>

       <footer>...</footer>

    </div>
    );
  }
}

export default App;
