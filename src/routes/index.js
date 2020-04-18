import React from 'react';
import './App.css';
import Home from '../views/Home';
import Header from '../components/Header';
import Book from '../views/Book';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/book" component={Book} />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
