import React, { Component } from 'react';
import backIcon from '../assets/icons/back.svg'
import '../App.css';

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
          <img className="News-details-photo" src={data.photo} />
          <img src={backIcon} className="Back-icon" alt="back" />
          <p className="News-details-title">{data.title}</p>
        </div>

        <div>
          <div>
            <img src={backIcon} className="Back-icon" alt="back" />
          </div>
          <div>
            <img src={backIcon} className="Back-icon" alt="back" />
          </div>
          <img src={backIcon} className="Back-icon" alt="back" />
          <img src={backIcon} className="Back-icon" alt="back" />
        </div>

        <p className="Card-info">{data.info} ...</p>
        <div className="Card-icons-container" onClick={() => { }}>
          {/* <img src={moreIcon} className="More-icon" alt="search" />
          <img onClick={() => { this.moreInfo(true) }} src={bookmarkIcon} className="Search-icon" alt="bookmark" /> */}
        </div>
      </div>
    );
  }
}

export default NewsDetails;
