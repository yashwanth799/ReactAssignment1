import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
          <Route path="/Home"  component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />  
      </Switch>
    </div>
    </Router>
  );
}

export default App;