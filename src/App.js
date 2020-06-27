import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import MyComponent from './MyComponent';
import ColoredBlock from './ColoredBlock.js';
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
        <p className="App-intro">Hi {this.props.name}!</p>
        <Clock />
        <MyComponent />
        <div className="main-content">
         <ColoredBlock />
         <Products />
       </div>
       <footer>...</footer>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <p class="App-intro">Hi {this.props.name}!</p>
//     </div>
//   );
// }

export default App;
