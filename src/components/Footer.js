import React, { Component } from 'react';
import home from '../assets/icons/home.svg'
import plus from '../assets/icons/plus.svg'
import avatar from '../assets/icons/avatar.svg'
import notification from '../assets/icons/notification.svg'
import menu from '../assets/icons/menu.svg'

import '../App.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    }
  }

  render() {
    return (
      <div className="Footer-container">
        <footer className="Card-container Footer">
          <div>
            <img className="icon" src={home} alt="home" />
          </div>
          <div>
            <img className="icon" src={plus} alt="plus" />
          </div>
          <div>
            <img className="icon" src={avatar} alt="avatar" />
          </div>
          <div>
            <img className="icon" src={notification} alt="notification" />
          </div>
          <div>
            <img className="icon" src={menu} alt="menu" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
