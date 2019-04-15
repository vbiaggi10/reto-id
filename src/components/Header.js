import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    }
  }

  render() {
    return (
      <div>
        <header>
          <h2>{this.state.title}</h2>
        </header>
      </div>
    );
  }
}

export default Header;
