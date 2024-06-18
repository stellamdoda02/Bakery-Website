import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './componets/HomePage';
import AboutPage from './componets/AboutPage';
import MenuPage from './componets/MenuPage';
import Navigation from './componets/Navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="Nav-bar">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/menu" component={MenuPage} />
        </Switch>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-copyright">
            <p>&copy; 2024 Stella. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
