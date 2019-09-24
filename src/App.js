import React from 'react';
import './App.css';
import Home from './Home';
import Teacher from './Teacher';
import Student from './Student';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher" component={Teacher} />
      <Route exact path="/student" component={Student} />
    </div>
  );
}

export default App;