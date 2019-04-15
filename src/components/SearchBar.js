import React, { Component } from 'react';
import searchIcon from '../assets/icons/search.svg';
import '../App.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="Search-container">
          <div className="Search-input-container">
            <input className="Search-input" placeholder="¿Qué deseas saber?" />
          </div>
          <img src={searchIcon} className="Search-icon" alt="search" />
      </div>
    );
  }
}

export default SearchBar;
