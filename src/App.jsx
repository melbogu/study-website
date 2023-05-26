import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import MyCourses from './pages/MyCourses';
import Dashboard from './pages/Dashboard';

class App extends Component {
    state = {  } 
    render() { 
        return <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="myCourses" element={<MyCourses />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>;
    }
}
 
export default App;