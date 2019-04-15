import React, { Component } from 'react';
import searchIcon from '../assets/icons/search.svg';
import '../App.css';
import Input from './Input';

class SearchBar extends Component {
  render() {
    return (
      <div className="Search-container">
        <Input placeholder="¿Qué deseas saber?" />
        <img src={searchIcon} className="Search-icon" alt="search" />
      </div>
    );
  }
}

export default SearchBar;
