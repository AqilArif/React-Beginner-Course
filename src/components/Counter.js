import React from 'react'

class Counter extends React.Component {
    constructor() {
      super();
      this.state = { // Declaring All states in this (State Object)
        counter: 0 // Define State and it's value
      };
    }

    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };
    
    handleDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    };
  
    render() {
      return (
        <div>
          <p>The count is: {this.state.counter}</p>
          
          <button onClick={this.handleIncrement}>
            Increment
          </button>

          &nbsp;
          
          <button onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      );
    }
  }
  
  export default Counter;
  