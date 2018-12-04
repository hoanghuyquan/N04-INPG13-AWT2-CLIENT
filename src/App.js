import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Screens/Home';
import Topic from './Screens/Topic';
import Level from './Screens/Level';
import About from './Screens/About';
import Login from './Screens/Login';
import Upload from './Screens/Upload';
import Search from './Screens/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/sujet" component={Topic} />
          <Route path="/niveau" component={Level} />
          <Route path="/nouvelle" component={Upload} />
          <Route path="/chercher" component={Search} />
          <footer className="footer">
            <About />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;