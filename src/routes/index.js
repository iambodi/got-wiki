import React from 'react';
import './App.css';
import Home from '../views/Home';
import Header from '../components/Header';
import Book from '../views/Book';
import Character from '../views/Character';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/book" component={Book} />
          <Route path="/character" component={Character} />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
