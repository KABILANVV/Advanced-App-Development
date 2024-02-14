import React, { useState,useEffect } from 'react';
import '../Css/home.css';
import { Button, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import UseTypingEffect from '../Components/Typing';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate=useNavigate();
    const handleSubmit=(name,title)=>
    { 
      const jobContainers={
        companyname:name,
        jobtitle:title
      }
      console.log(jobContainers);
      props.companyANDtitle(jobContainers)
      navigate('/ApplicationForm') 
    }
  
  const [companies,setCompanies]=useState([]);
  const [apply, setApply] = useState(false);
  const [loading, setLoading] = useState(true);
  const text = UseTypingEffect('Hello! Do You want to Apply for a Role', 150);
  useEffect(() => {
    // Simulate data fetching, replace with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Set loading to true while fetching data
        setLoading(true);

        // Replace this with your actual data fetching logic
        const response = await fetch('http://localhost:8082/get/company');
        setCompanies(await response.json());

        // Update state with fetched data

        // Set loading to false after data is fetched
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors if necessary
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Run once on component mount

  if(loading){
    return(
      <div>
      <CircularProgress style={{color:'black' ,fontSize:'500cm',textAlign:'center'}} />
      </div>
      )
    }
    if(apply){
      return (
        <div>
    <div className="viewvenue">
      {companies.map((company, index) => (
        <div key={index} className='view-container'>
          <img src={company.image_url} alt={company.company_name} />
          <div className='desc'>
          <h1 className='des-tit'>{company.company_name}</h1>
            <p>{company.post}</p>
            <p>Experience : {company.experience=="NIL"? "": <WorkIcon/>} {company.experience}<br/> Location : <WhereToVoteOutlinedIcon style={{fontSize:"15px"}}/> {company.company_location} <br/><ApartmentTwoToneIcon  /> {company.type} </p> 
            <br/>
            <Button variant="contained" color="primary" onClick={()=>handleSubmit(company.company_name,company.post)} >
            Apply
            <ArrowForwardIcon/>
          </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
  return(
    <div>
    <div className='main' >{text}{text.length<=37?"":<div style={{paddingLeft:"700px"}}><Button onClick={()=>setApply(true)} style={{fontFamily:'Gowun Batang',fontSize:"30px",backgroundColor:"rgb(255, 255, 255)" ,color:"black", }} variant="contained" color="primary">Apply Now<ArrowForwardIcon/></Button></div>}</div>
    </div>
  );
}

export default Home;