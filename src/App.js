import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import tripList from "./components/tripList.component";
import edittripList from "./components/edittripList.component";
import createTrip from "./components/createTrip.component";
function App() {
  return (
    
    <Router>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">CLick_n_Go</Link>
        <div className="collpase nav-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">trip-list</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Add new trip</Link>
          </li>
          <li className="navbar-item">
            <Link to="/edit/:id" className="nav-link">Edit trip</Link>
          </li>
        </ul>
        </div>
      </nav>
      
      <h1>heading</h1>
      <button class="btn btn-primary">click here</button>
    <Route path="/" exact component={tripList}/>
    <Route path="/edit/:id" component={edittripList}/>
    <Route path="/create" component={createTrip}/>
    </div>
    </Router>
    
  );
}

export default App;
