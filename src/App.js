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
    <div className="App">
    <Router>
    
      <h1>heading</h1>
      <button class="btn btn-primary">click here</button>
    <Route path="/" exact component={tripList}/>
    <Route path="/edit/:id" component={edittripList}/>
    <Route path="/create" component={createTrip}/>
    </Router>
    </div>
  );
}

export default App;
