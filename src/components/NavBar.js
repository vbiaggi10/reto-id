import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'item1',
      options: props.options
    }
  }

  render() {
    return (
      <div className="NavBar-container">
        {
          this.state.options.map(option => {
            return (
              <div onClick={() => { this.setState({ activeItem: option.key }) }}>
                <p className={this.state.activeItem === option.key ? "NavBar-item-active" : "NavBar-item"}>{option.name}</p>
                {this.state.activeItem === option.key ? this.line() : null}
              </div>
            )
          })
        }
      </div>
    );
  }

  line() {
    return (
      <div className="line"></div>
    )
  }
}

export default NavBar;
