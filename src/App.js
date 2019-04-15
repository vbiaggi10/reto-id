import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import Card from './components/Card';
import NewsDetails from './components/NewsDetails';

import News from './data/News.json'
import options from './data/NavBarOptions.json'
import Footer from './components/Footer';


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
        <NewsDetails data={this.state.data} moreInfo={(status) => { this.moreInfo(null, status) }} />
      )

    return (
      <div className="App">
        <Header title="Noticias" />
        <SearchBar />
        <NavBar options={options} />
        <div className="Cards-container">
          {News.map((news, i) => {
            return (
              <Card
                info={news.info}
                key={`news-${i}`}
                moreInfo={(status) => { this.moreInfo(news, status) }}
                photo={news.photo}
                title={news.title}
              />
            )
          })}
        </div>

        <Footer />

      </div>
    );
  }

  moreInfo = (data, status) => {
    this.setState({ data, infoStatus: status })
  }
}

export default App;
