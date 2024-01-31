import React from 'react';
import SignIn from './Components/log';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Home component (replace with the correct path)
import Home from './pages/Home';
import Navbar from './Components/NavBar';
import About from './pages/about';
import "./App.css" 
import SignUp from './Components/sign';
const App = () => {
  return (
    <div>
    <div className="body">
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          </Routes>
          </BrowserRouter>
          </div>
          <div className='body2'>
          </div>
          </div>
          );
        };
        
        // <Route path="/Dashboard" element={<Home />} />
export default App;
