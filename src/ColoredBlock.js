import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {

  constructor(props) {
    super(props);
    // Initial value of the state
    this.state = {backgroundColor: 'red'};
    this.changeColor = this.changeColor.bind(this);
  }

  // Call back function
  changeColor() {
    // Second version of the setState function: takes a function call back as argument
    // Any time where we are setting the state based on a previous state we have to use this second version otherwise synchronuous issues
    this.setState((prevState) => {
      let newColor = prevState.backgroundColor === 'red' ? 'blue' : 'red';
      return {backgroundColor: newColor};
    });
    // this.setState({backgroundColor: newColor});
  }

  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
        <ChangeColorButton onClick={this.changeColor} />
      </div>
    )
  }
}

export default ColoredBlock;
