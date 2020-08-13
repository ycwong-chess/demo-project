import React from 'react';
import logo from './logo.svg';
import profileImage from './img/spirited-away.jpg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Quiz from './Quiz';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
    <body>
        <h1>My demo-react app</h1>
          <h2>Author: YC Wong</h2>
        <img src={profileImage} alt="spirited-away"/>
      </body>
  </div>
)

export default App;



{/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from here...
        </a>
      </header>*/}