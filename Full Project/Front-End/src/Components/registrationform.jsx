import React, { useState } from 'react';
// import axios from 'axios';
import "../Css/form.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobApplicationForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id:0,
    fullname: '',
    address: '',
    companys: props.company.companyname,
    title: props.company.jobtitle,
    phonenumber: 9283138211,
    skill1: '',
    skill2: '',
    skill3: '',
    experience:''
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
      user_id:formData.id,
      applicant_name: formData.fullname,
      company_name: formData.companys,
      post: formData.title,
      applicant_address:formData.address,
      applicant_mobile_no: formData.phonenumber,
      skill1:formData.skill1,
      skill2:formData.skill2,
      skill3:formData.skill3,
      experience:formData.experience,
    }
    console.log(container);
    // try{
    // await
     axios.post("http://localhost:8082/add/apply", container);
    // console.log('Job application submitted successfully:', container);
    alert("Successfully Applied for "+props.company.jobtitle);
    navigate("/")

    // } catch (error) {
      // console.error('Error submitting job application:', error);

  // };
  }
  return (
    <div className="JobApp">
      <h1 style={{ margin: "0px", marginTop: "15px", textAlign: "center", color: "black", marginBottom: "-1cm" }}>Job Application Form</h1>
      <form>
        <div className='form'>

        
        <label htmlFor="id">User id:</label>
        <input
          type="tel"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="companys"
            value={formData.companys}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="company">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled
          />

          <label htmlFor="skill1">skill1:</label>
          <input
            type="tel"
            id="skill1"
            name="skill1"
            value={formData.skill1}
            onChange={handleChange}
            required
          />
          <label htmlFor="skill2">skill2:</label>
          <input
            type="tel"
            id="skill2"
            name="skill2"
            value={formData.skill2}
            onChange={handleChange}
            required
          />
          <label htmlFor="skill3">skill3:</label>
          <input
            type="tel"
            id="skill3"
            name="skill3"
            value={formData.skill3}
            onChange={handleChange}
            required
          />
          <label htmlFor="experience">experience:</label>
          <input
            type="tel"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <label htmlFor="ADDRESS">Address:</label>
          <textarea style={{ width: "755px" }}
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit" style={{ width: "100%", backgroundColor: "blue" }} onClick={handleClick}>Submit Application</button>
        </div>
      </form>
    </div>

  );
};

export default JobApplicationForm;