import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Card from './components/Card';
import NewsDetails from './components/NewsDetails';

import News from './data/News.json'
import options from './data/NavBarOptions.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      infoStatus: false
    }
  }

  render() {
    if (this.state.infoStatus)
      return (
        <NewsDetails data={this.state.data} />
      )

    return (
      <div className="App">
        <Header title="Noticias" />
        <SearchBar />
        <NavBar options={options} />
        {News.map(news => {
          return (
            <Card
              info={news.info}
              moreInfo={(status) => { this.moreInfo(news, status) }}
              photo={news.photo}
              title={news.title}
            />
          )
        })}
      </div>
    );
  }

  moreInfo = (data, status) => {
    this.setState({ data, infoStatus: status })
  }
}

export default App;
