import React from 'react';
import SignIn from './Components/log';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Home component (replace with the correct path)
import Home from './pages/Home';
import Navbar from './Components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* Replace the import path with the correct one */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
