import React, { Component } from 'react';
import moreIcon from '../assets/icons/more.svg';
import bookmarkIcon from '../assets/icons/bookmark.svg';
import '../App.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      photo: props.photo,
      title: props.title,
      openInfo: false
    }
  }

  render() {
    return (
      <div className="Card-container">
        <img onClick={() => { this.moreInfo(true) }} className="Card-photo" src={this.state.photo} alt="more" />
        <p className="Card-title">{this.state.title}</p>
        {this.state.openInfo ? <p className="Card-info">{this.state.info} ...</p> : null}
        <div className="Card-icons-container" onClick={() => { this.setState({ openInfo: !this.state.openInfo }) }}>
        {this.state.openInfo ? <div className="flex-1" /> : null}
          <img src={moreIcon} className="More-icon flex-5" alt="more" />
          {this.state.openInfo ? <img onClick={() => { this.moreInfo(true) }} src={bookmarkIcon} className="Search-icon flex-1" alt="bookmark" /> : null}
        </div>
      </div>
    );
  }

  moreInfo = (status) => {
    this.props.moreInfo(status)
  }
}

export default Card;
