import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
    <Router>
    <main>
    
    <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>

     <Switch>
          
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

      </Switch>

    </main>
    
    </Router>
    <Footer />
    </>
  );
}

export default App;