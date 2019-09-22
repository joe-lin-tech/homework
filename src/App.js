import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Teacher from './Teacher';
import Student from './Student';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher" component={Teacher} />
      <Route exact path="/student" component={Student} />
    </div>
  );
}

export default App;
