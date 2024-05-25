import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AllNews from './components/AllNews'
import Business from './components/Business';
import HomeBody from './components/HomeBody'
import Entertainment from './components/Entertainment'
import General from './components/General'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Home from './components/Home';

export default function App() {
  return (

    <Router>
      <Home></Home>
      <Routes>
        <Route path="/" element={<HomeBody></HomeBody>} />
          <Route path="/all-news" element={<AllNews></AllNews>} />
          <Route path="/business" element={<Business></Business>} />
          <Route path="/entertainment" element={<Entertainment></Entertainment>} />
          <Route path="/general" element={<General></General>} />
          <Route path="/health" element={<Health></Health>} />
          <Route path="/science" element={<Science></Science>} />
          <Route path="/sports" element={<Sports></Sports>} />
          <Route path="/technology" element={<Technology></Technology>} />
      </Routes>
    </Router>

  );
}