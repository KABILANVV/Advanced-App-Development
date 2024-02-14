import React, { useEffect, useState } from 'react';
import SignIn from './Components/log';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Home component (replace with the correct path)
import Home from './pages/Home';
import Navbar from './Components/NavBar';
import About from './pages/About';
import "./App.css" 
import SignUp from './Components/sign';
import Admin from './pages/Admin';
import Dashboard from './Components/Dashboard';
import AddJobs from './Components/addJobs';
import UserJobsList from './Components/UserJobList';
import JobApplicationForm from './Components/registrationform';
import Login from './Components/login';
import AdminForm from './Components/adminform';
// Initialize state with data from localStorage
const App = () => {
  useEffect(() => {
    // Code inside this block will run when the component mounts

    // Set an initial value in local storage
    localStorage.setItem('logged', false);
  }, []);
  const [allJobs, setAllJobs] = useState(() => {
    const storedJobs = localStorage.getItem('userJobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const [Company, setCompany] = useState([]);

  function handlecomANDtitle(jobContainer) {
   setCompany(jobContainer);
 }

  // Update localStorage and state when a new job is added
  const handleAddJob = (newJob) => {
    const updatedJobs = [...allJobs, newJob];
    setAllJobs(updatedJobs);
    localStorage.setItem('userJobs', JSON.stringify(updatedJobs));
  };

// Your routes and other middleware here

return (
  <div>
  <div className="body">
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path="/" element={<Home 
            companyANDtitle={handlecomANDtitle}/>} />
            <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/add" element={<AdminForm />} />
          <Route path="/admin" element={<Login />} />
          <Route path='/Add' element={<AddJobs onAddJob={handleAddJob} />} />
        <Route path='/Userlist' element={<UserJobsList userJobs={allJobs}/>}/>
        <Route
          path='/ApplicationForm'
          element={<JobApplicationForm company={Company}/>}
        />
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
          // <Route path="/admin" element={<Admin />} />