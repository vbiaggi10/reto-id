import React, { Component } from 'react';
import backIcon from '../assets/icons/back.svg'
import heartIcon from '../assets/icons/heart.svg'
import commentIcon from '../assets/icons/comment.svg'
import shareIcon from '../assets/icons/share.svg'
import bookmarkIcon from '../assets/icons/bookmark-blue.svg'
import smileyIcon from '../assets/icons/smiley.svg'
import pictureIcon from '../assets/icons/picture.svg'
import playIcon from '../assets/icons/play-button.svg'
import '../App.css';
import Input from './Input';

class NewsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="News-details-container">
        <div className="News-details-header">
          <img className="News-details-photo" src={data.photo} alt="banner" />
          <img onClick={() => { this.moreInfo(false) }} src={backIcon} className="Back-icon" alt="back" />
          <p className="News-details-title">{data.title}</p>

          <div className="News-details-icons-container">
            <div className="content-left">
              <div className="News-details-info">
                <img src={heartIcon} className="icon Heart-icon" alt="likes" />
                <p>{data.likes}</p>
              </div>
              <div className="News-details-info">
                <img src={commentIcon} className="icon Comment-icon" alt="comments" />
                <p>{data.comments}</p>
              </div>
            </div>

            <div className="content-right">
              <img src={shareIcon} className="icon Share-icon" alt="back" />
              <img src={bookmarkIcon} className="icon Bookmark-blue-icon" alt="bookmark" />
            </div>
          </div>
        </div>

        <div>
          <p className="Card-info">{data.date}</p>
          <br />
          <p className="text">{data.text}</p>
        </div>

        <div className="News-details-info News-details-comment-container">
          <img alt="profile" src="https://www.elnacional.cat/enblau/uploads/s1/48/96/32/1/scarlett_1_630x630.png" className="profile-pic" />
          <div className="News-details-comment prueba1">
            <Input placeholder="Escribe un comentario" />
            <div className="prueba2">
              <img src={smileyIcon} className="icon Comment-icon" alt="smiley" />
              <img src={pictureIcon} className="icon Comment-icon" alt="camera" />
            </div>

          </div>
          <div className="Comment-play-container">
            <img src={playIcon} className="icon Play-icon" alt="play" />
          </div>
        </div>


      </div>
    );
  }

  moreInfo = (status) => {
    this.props.moreInfo(status)
  }
}

export default NewsDetails;
