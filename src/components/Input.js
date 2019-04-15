import React, { Component } from 'react';
import '../App.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder
    }
  }

  render() {
    return (
      <div className="News-details-input-container">
        <input className="News-details-input" placeholder={this.state.placeholder} />
      </div>
    );
  }
}

export default Input;
