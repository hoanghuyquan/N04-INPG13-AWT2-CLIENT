import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import ThumbSwiper from './Components/ThumbSwiper';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Screens/Home';
import Topic from './Screens/Topic';
import Level from './Screens/Level';
import About from './Screens/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            <ThumbSwiper />
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/sujet" component={Topic} />
            <Route path="/niveau" component={Level} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;