// Dashboard.js
import React, { useEffect, useState } from 'react';
import '../Css/dashboard.css';

const Dashboard = () => {
  const [appliedJobsCount, setAppliedJobsCount] = useState(0);
  
  const [dash,setDash]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
    try {

      // Replace this with your actual data fetching logic
      const response = await fetch('http://localhost:8082/get/dash/1');
      setDash(await response.json());

      // Update state with fetched data

      // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors if necessary
    }
  }
  // Call the fetchData function
  fetchData();
}, []); // Run once on component mount
  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h3>Applied Jobs</h3>
        <p>{dash.applied+dash.declined}</p>
      </div>
      <div className="dashboard-box">
        <h3 style={{color :"rgb(250, 10, 50)"}}>Declined</h3>
        <p style={{color :"red"}}>{dash.declined}</p>
      </div>
      <div className="dashboard-box">
        <h3 style={{color :"powder green"}}>Accepted</h3>
        <p style={{color :"green"}}>{dash.accepted}</p>
      </div>
      </div>
      );
    };
    
    // <div className="dashboard-box">
    //   <h3 style={{color :"rgb(255, 225, 0)"}}>In Progress</h3>
    //   <p style={{color :"yellow"}}>{dash.declined}</p>
    // </div>
export default Dashboard;
