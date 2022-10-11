import React from "react";
import './scss/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from "./Background";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Appointments from "./Appointments";
import Materials from "./Materials";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Background />
        <Navbar />
        <Header />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/appointments' element={<Appointments/>} />
            <Route exact path='/materials' elements={<Materials/>} />
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;