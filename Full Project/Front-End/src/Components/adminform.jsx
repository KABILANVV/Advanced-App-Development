import React, { useState } from 'react';
// import axios from 'axios';
import "../Css/adminform.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:"",
    company_name:"",
    image_url:"\\src\\assets",
    company_location:"",
    description:"",
    experience:"",
    post:"",
    type:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // async
   const handleClick= (e)=>{
     e.preventDefault();
    const container = {
    title:formData.title,
    company_name:formData.company_name,
    image_url:formData.image_url,
    company_location:formData.company_location,
    description:formData.description,
    experience:formData.experience,
    post:formData.post,
    type:formData.type
    }
    console.log(container);
    // try{
    // await
     axios.post("http://localhost:8082/add/company", container);
    // console.log('Job application submitted successfully:', container);
    alert("Company Added ");
    // navigate("/")

    // } catch (error) {
      // console.error('Error submitting job application:', error);

  // };
  }
  return (
      <div>
      <br/>
      <div className="JobApp1">
      <br/>
      <h1 style={{ margin: "0px", marginTop: "0px", textAlign: "center", color: "black", marginBottom: "-1cm" }}>Job Application Form</h1>
      <form>
        <div className='form'>
        
        <label htmlFor="title">Job Title:</label>
        <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        />
        <label htmlFor="company_name">Company:</label>
        <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
          />

          <label htmlFor="image_url">image:</label>
          <input
          type="image_url"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
          />
          <label htmlFor="company_location">company Location:</label>
          <input
            type="company_location"
            id="company_location"
            name="company_location"
            value={formData.company_location}
            onChange={handleChange}
            required
            />
            <label htmlFor="experience">Experience:</label>
            <input
            type="experience"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            />
            <label htmlFor="type">Type:</label>
            <input
            type="type"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            />
            <label htmlFor="post">Post:</label>
            <input
            type="post"
            id="post"
            name="post"
            value={formData.post}
            onChange={handleChange}
            required
            />
          

            <button type="submit" style={{ width: "100%", backgroundColor: "blue" }} onClick={handleClick}>Submit Application</button>
            </div>
            </form>
            </div>
            
            </div>
            );
        };

        export default AdminForm;